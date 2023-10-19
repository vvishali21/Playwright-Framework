const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.logoLoc = page.locator("//a[@id='nav-logo-sprites']");
        this.topNavLinksLoc = page.locator("//div[@id='nav-main']");
    }

    async navigate() {
        await this.page.goto("https://www.amazon.in/");
    }

    async pageTitle() {
        await expect(this.page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    }

    async logo() {
        await expect(this.logoLoc).toBeVisible();
    }
};
