const { test, expect } = require("@playwright/test");
const { SearchPage } = require("./page-objects/SearchPage");
const { HomePage } = require("./page-objects/HomePage");
const { CartPage } = require("./page-objects/CartPage");

test.describe("Cart Tests", () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.pageTitle();
  });

  test("Verify user is able to add product to Cart", async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.search();

    const cartPage = new CartPage(page);
    await cartPage.pageTitle();
    await cartPage.chooseDress();
    await cartPage.selectSize();
    await page.waitForTimeout(2000);
    await cartPage.addToCart()
    await page.waitForTimeout(5000);
    await cartPage.productInCart();
  });
});