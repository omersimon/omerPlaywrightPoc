import {ElementHandle, Page} from "@playwright/test";
import fs from "fs";
import path from "path";

export class GoogleResults {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }


    async getSearchResults(): Promise<any[]> {
        const elements = await this.page.$$('div.g');
        const results = await Promise.all(elements.map(async (element) => {
            const link = await element.$('a');
            const title = await element.$('h3');
            return {
                link: await link?.getAttribute('href') ?? '',
                title: await title?.textContent() ?? '',
                loadtime: '',
            };
        }));
        return results;
    };

    async calculateAvgTimeOfSearchResults(): Promise<{listOfResults: any[], averageTime: number}> {
        const listOfResults = await this.getSearchResults();
        let loadTime = 0;
        let totlalTine = 0;
        for (const item of listOfResults.slice(0,2)) {
            const startTime = Date.now();
            await Promise.all([
                this.page.goto(item.link),
                this.page.waitForNavigation(),
            ])
            loadTime = (Date.now() - startTime) / 1000;
            totlalTine += loadTime;
            item.loadtime = loadTime, toString();

        }
        const averageTime = totlalTine / listOfResults.length
        return { listOfResults, averageTime };

    }

    async writeObjectToJsonFile(objectToWrite: object) {
        const date = new Date();
        const formattedDate = `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}_${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;
        const filename = `search_results_${formattedDate}.json`;
        const filePath = path.join(__dirname, filename);
        const resultJson = JSON.stringify(objectToWrite);
        fs.writeFileSync(filePath, resultJson);
        console.log(`JSON written to ${filePath}:`, resultJson);
    }

}
