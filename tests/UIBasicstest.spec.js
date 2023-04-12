const {test, expect} = require('@playwright/test');


//test.use({ browserName: 'webkit'});
test.skip('@Web Browser Context-Validating Error login', async ({browser}) => {
    /**
     * @type {import('@playwright/test').Page}
     */

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    const password = page.locator("#password");
    const signInButton  = page.locator("[name=signin]");
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.type("rahulshettyacademy");
    await password.type("learning");
    await signInButton.click;
    await page.waitForTimeout(15000);

});

test.skip('google ', async ({page}) => {  /**
 * @type {import('@playwright/test').Page}
 */
    // page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    await page.goto("https://google.com");
    await expect(page).toHaveTitle("Google")
});






