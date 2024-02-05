import sql from 'mssql';
import * as dotenv from 'dotenv';
import { ConnectionPool, Transaction, ISOLATION_LEVEL } from "mssql";

const TRANSACTION_ROLLED_BACK_MESSAGE = 'Transaction rolled back';
const TRANSACTION_COMMITTED_MESSAGE = 'Transaction committed successfully';
const TRANSACTION_INIT_ERROR = 'Transaction initialization error: ';
const TRANSACTION_QUERY_EXECUTION_ERROR = 'Transaction query execution error: ';
const TRANSACTION_ROLLBACK_ERROR = 'Transaction rollback error: ';
const TRANSACTION_COMMIT_ERROR = 'Transaction commit error: ';
const POOL_INITIALIZATION_ERROR = 'Could not supply connection pool';

dotenv.config({ path: './.env.default' });
let connPool: ConnectionPool;

/*
Intended to be used for query parametrization. I.e. when you need to insert a query param/s (id, name etc.) runtime.
Example:
const request: sql.Request = await parametrizedDbReuqest();
request.input('id', sql.BigInt, 42);
request.query(SELECT * FROM Table WHERE id=@id;);
*/
export const parametrizedDbRequest = async (): Promise<sql.Request> => {
  return (await getPool()).request();
}

/*
Intended to be used for raw query parametrization w/o WHERE, GROUP BY, SORT etc. needed runtime.
Example:
await rawQuery(SELECT * FROM Table;);
*/
export const rawQuery = async (sqlQuery: string): Promise<sql.IResult<any>> => {
  return (await getPool()).query(sqlQuery);
}

/*
Intended to be used for bulk ops. I.e. inserting, updating or deleting many table rows at a time.
*/ 
export const transaction = async (sqlQuery: string): Promise<void> => {

  const transaction: sql.Transaction = new Transaction(await getPool());

  try {
    await beginTransaction(transaction);
    await executeQuery(transaction, sqlQuery);
    await commitTransaction(transaction);
  } catch (error) {
    await rollbackTransaction(transaction, error);
  }
}

const getPool = async (): Promise<sql.ConnectionPool> => {

  if (!connPool) {
    let connString: string | undefined  = process.env.DB_CONN_STRING;
    connString = connString ? connString : '';
    try {
      connPool = await sql.connect(connString);
    } catch (err) {
      console.log(POOL_INITIALIZATION_ERROR);
      throw err;
    }
  }
  return connPool;
}

const beginTransaction = async (transaction: sql.Transaction): Promise<void> =>
  new Promise((resolve, reject) => {
    transaction.begin(ISOLATION_LEVEL.READ_UNCOMMITTED, err => {
      if (err) {
        console.error(TRANSACTION_INIT_ERROR, err);
        reject(err);
      } 
      resolve();
    });
  });

const executeQuery = async (transaction: sql.Transaction, sqlQuery: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const request = transaction.request();
    request.query(sqlQuery, (err) => {
      if (err) {
        console.error(TRANSACTION_QUERY_EXECUTION_ERROR, err);
        reject(err);
      } 
      resolve();
    });
  });

const commitTransaction = async (transaction: sql.Transaction): Promise<void> =>
  transaction.commit()
    .then(() => console.log(TRANSACTION_COMMITTED_MESSAGE))
    .catch(commitErr => {
      console.error(TRANSACTION_COMMIT_ERROR, commitErr);
      throw commitErr;
    });

const rollbackTransaction = async (transaction: sql.Transaction, err: any): Promise<void> =>
  transaction.rollback()
    .then(() => console.log(TRANSACTION_ROLLED_BACK_MESSAGE))
    .catch(rollbackErr => {
      console.error(TRANSACTION_ROLLBACK_ERROR, rollbackErr);
    })
    .finally(() => {
      throw err;
    });