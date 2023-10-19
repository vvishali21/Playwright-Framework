const { expect } = require("@playwright/test");

exports.CartPage = class CartPage {
    constructor(page) {
        this.page = page;
        this.verifyPage = page.getByText('"crop tops for women"');
        this.dressBtn = page.locator('._bXVsd_gridColumn_2Jfab > div > div > a');
        this.productInCarts = page.getByLabel('Add to Cart');
        this.productInCartLoc = page.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' });
        this.sizeBtn = page.locator('#native_dropdown_selected_size_name');
    }

    async pageTitle() {
        await this.verifyPage.click();
    }

    async chooseDress() {
        await this.dressBtn.first().click();
    }

    async selectSize() {
        await this.sizeBtn.selectOption('0,B099KR1LVQ');
    }

    async addToCart() {
        await this.productInCarts.click();
    }

    async productInCart() {
        await this.productInCartLoc.click();
    }

};


