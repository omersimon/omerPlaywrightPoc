import { test } from "@playwright/test";
import { GoogleSearchResultsPage, GoogleSearchPage } from "../googleTest/pages";
import { GenericTools } from "../googleTest/tools/genericTools";
import path from "path";

test.describe('Chromium only', () => {
    let page;
  //  let searchPage;
   // let resultsPage;
    //let tools;

    test.beforeEach(async ({ browser }) => {
        // Create a new browser context and page for each test
        page = await browser.newPage();
        //searchPage = new GoogleSearchPage(page);
        //resultsPage = new GoogleSearchResultsPage(page);
        // tools = new GenericTools();
    });

    test.afterEach(async () => {
        // Close the browser context after each test
        await page.close();
    });

    test('should have a title', async () => {

    });
});
