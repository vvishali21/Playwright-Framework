const { expect } = require("@playwright/test");

exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page = page;
        this.allLinkLoc = page.getByPlaceholder('Search Amazon.in');
        this.acmeLinkLoc = page.getByRole('button', { name: 'Go' });
        this.productLinkLoc = page.locator("//span[text()='Special Edition T-Shirt']");
        this.pageHeaderLoc = page.locator("//span[contains(text(),'Category')]");
    }

    async search() {
        await this.allLinkLoc.fill('crop tops for women');
        await this.acmeLinkLoc.click();
    }

    async pageHeader() {
        await expect(this.pageHeaderLoc).toHaveText("Category");
    }

};
