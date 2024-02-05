import { test, expect } from "@playwright/test";
import { Configuration } from "openapi/runtime"; // Will resolve after you generate the API client
// import { ... } from "openapi/apis"; // Import your API(s) here
import { intitializeConfiguration } from "helper/generatedApiConfig";
import { parametrizedDbRequest, transaction, rawQuery } from "helper/dbHelper";
 
import sql from 'mssql';
 
test.describe('My sample test class', () => {
 
    // // DECLARE YOUR API(S) HERE:
    // let api: MyApi;
 
    test.beforeAll(async () => {
 
        // // INITIALIZE YOUR API CLIENT HERE:
        // const configuration: Configuration = await intitializeConfiguration();
        // api = new MyApi(configuration);
 
        // // (RE)SET YOUR DB STATE HERE IF NEEDED:
        // await transaction(MyDbQueries.CLEAR_TABLE);
        // await transaction(MyDbQueries.FILL_TABLE);
    });
 
    test('My sample test', async () => {
 
        // // HERE'S A SAMPLE COMBO DB/API TEST ASSERTION:
        // let dbCall = await parametrizedDbRequest();
        // dbCall.input('id', sql.BigInt, 1);
 
        // let dbResult = await dbCall.query(MyDbQueries.SELECT_SOMETHING_BY_ID);
        // let rqResult = await api.hitSomeGetEndpointById({ id: 1 });
 
        // expect(dbResult.recordset[0].name).toEqual(rqResult.name);
    });
});