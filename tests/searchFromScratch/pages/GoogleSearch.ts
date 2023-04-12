import {Page} from "@playwright/test";

export class GoogleSearch {
    private page: Page;
    private searchInput= "input[name=q]"


    constructor(page: Page) {
        this.page = page;
    }

    async searchInGoogle(keyWord:string){
        await this.page.goto("https://www.google.com/");
        await this.page.fill(this.searchInput,keyWord);
        await this.page.press(this.searchInput,'Enter');
        await this.page.waitForNavigation();

    }

}
