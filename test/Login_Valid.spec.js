const { test } = require('@playwright/test');

test('Amazon Login Validation', async ({ page }) => {

    await page.goto('https://www.amazon.in'); 

    await page.click('#nav-link-accountList'); 

    await page.waitForSelector('#ap_email');

    await page.fill('#ap_email', 'sample@mail.com');// Enter your email or phone here instead of(sample@mail.com)
   
    await page.click('#continue'); 

    await page.waitForSelector('#ap_password');

    await page.fill('#ap_password', 'your_password');//replace 'your_password' with the actual password

    await page.click('#signInSubmit');

    //after this you need to give OTP which can not be done using automation.
    
})