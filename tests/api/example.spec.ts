import { test, expect } from "@playwright/test";
import { Configuration } from "openapi/runtime";
// import { SystemApi } from "openapi/apis"; // Import your API(s) here after generating the client code
import { intitializeConfiguration } from "helper/generatedApiConfig";
import { parametrizedDbRequest, transaction, rawQuery } from "helper/dbHelper";
import { MyDbQueries } from "helper/queries/myDbQueries";
 
import sql from 'mssql';
 
test.describe('My sample test class', () => {
 
    // // declare your api(s) here:
    // let api: SystemApi;

    // use test.beforeAll | test.beforeEach, depending on your needs
    test.beforeAll(async () => {
 
        // // initialize your api client(s) here:
        // const configuration: Configuration = await intitializeConfiguration();
        // api = new SystemApi(configuration);
 
        // // (re)set your DB state if needed:
        // await transaction(MyDbQueries.CLEAR_SOME_TABLE);
        // await transaction(MyDbQueries.FILL_SOME_TABLE);
    });
 
    test('My test example', async () => {
 
        // // here's a simple DB interaction:
        // const dbClient = await parametrizedDbRequest();
        // dbClient.input('id', sql.BigInt, 1);

        // // here's a simple api call with some assertions:
        // const rqResult = await api.apiSystemInfoGetRaw();
        // expect(rqResult.raw.status).toBe(401);

        // const rsBody = await rqResult.value();
        // expect(rsBody.data).toBeUndefined();
    });
});