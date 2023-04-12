import { test, expect } from '@playwright/test';

test.describe.skip('', () => {
    let browser, context, page;

    beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
    });

    test('', async () => {
        // Write your Playwright test code here.
    });

    afterAll(async () => {
        await browser.close();
    });
});
