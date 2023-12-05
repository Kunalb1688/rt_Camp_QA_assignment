import { test, expect } from '@playwright/test';

test('Amazon Search Functionality', async ({ page }) => {

    await page.goto('https://www.amazon.in');

    await page.fill('#twotabsearchtextbox', 'Headphones');// you can replace 'Headphones' with the product you want
    await page.press('#twotabsearchtextbox', 'Enter');

    await page.waitForLoadState('load');

    const searchResultsCount = await page.$$eval('.s-main-slot div[data-asin]', (results) => results.length);
    expect(searchResultsCount).toBeGreaterThan(0);

})
