const { test, expect } = require('@playwright/test');

test('Amazon Product Checkout', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.fill('#twotabsearchtextbox', 'Laptop');//replace 'Laptop' with the product you want
    await page.press('#twotabsearchtextbox', 'Enter');

    await page.click('.s-main-slot div[data-asin][data-index="0"] a');

    await page.waitForLoadState('load');

    await page.click('#add-to-cart-button');

    await page.waitForSelector('#attach-added-to-cart-alert');

    await page.click('#attach-view-cart-button');

    await page.waitForLoadState('load');

    const pageTitle = await page.title();
    expect(pageTitle).toContain('Checkout'); 
})

//Some functions here cannot be working without the login to amazon.in.
