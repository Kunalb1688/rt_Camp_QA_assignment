const { test, expect } = require('@playwright/test');

test('Amazon Wishlist Functionality', async ({ page }) => {

    await page.goto('https://www.amazon.in');
    
    await page.fill('#twotabsearchtextbox', 'Book');//replace 'Book' with the product you want
    await page.press('#twotabsearchtextbox', 'Enter');

    await page.click('.s-main-slot div[data-asin][data-index="0"] a');

    await page.waitForLoadState('load');

    await page.click('#add-to-cart-button');

    await page.waitForSelector('#attach-added-to-cart-alert');

    await page.click('#attach-view-cart-button');

    await page.waitForLoadState('load');

    await page.goto('https://www.amazon.in/gp/registry/wishlist/');

    const isProductInWishlist = await page.isVisible('.a-link-normal[data-asin="PRODUCT_ASIN"]');
    expect(isProductInWishlist).toBe(true);

    //To Validate this you need to sign in or log in to amazon.in
})
