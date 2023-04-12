import {test,} from "@playwright/test";
import {GoogleResults} from "./pages/GoogleResults"
import {GoogleSearch} from "./pages/GoogleSearch";


test.describe('Chromium only', () => {
    let searchPage;
    let resultPage;
    let page;


    test.beforeAll(async ({browser}) => {

    });
    test.beforeEach(async ({browser}) => {
        page = await browser.newPage();
        searchPage = new GoogleSearch(page);
        resultPage = new GoogleResults(page);
    });

    test.afterEach(async () => {
        // Close the browser context after each test
        await page.close();
    });

    test('enter to google and calculate avg  ', async () => {
        searchPage = new GoogleSearch(page);
        await searchPage.searchInGoogle("hello");
        const resultDetailObject  = await resultPage.calculateAvgTimeOfSearchResults();
        await resultPage.writeObjectToJsonFile(resultDetailObject)

    });
});
