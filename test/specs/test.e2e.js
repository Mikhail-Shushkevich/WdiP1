// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//         await expect(SecurePage.flashAlert)
//     })
// })

/*new test*/

//Welcome practice.automationbro.com - BlueHost.com
//http://practice.automationbro.com/

describe('Home', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await browser.url('https://www.bluehost.com/');

        //Assert title
        await expect(browser).toHaveTitle('Web Hosting, Domain, & WordPress Provider | Bluehost');
    });
});

describe('Home', () => {
    it('Open About & assert URL', async () => {
        // Open About Page
        await browser.url('https://www.bluehost.com/about');

        //Assert URL
        await expect(browser).toHaveUrl('https://www.bluehost.com/about');
    });

    it('Click get started btn & assert url contains get-started text', async () => {
        //given
        const url = 'https://webdriver.io';

        //when
        await browser.url(url);
        await $('a[href="/docs/gettingstarted"]').click()

        //then
        await expect(browser).toHaveUrl(expect.stringContaining('gettingstarted'));
    });
});


