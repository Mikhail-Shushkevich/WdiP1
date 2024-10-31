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
//https://webdriver.io/

describe('Home', () => {
    it('Open URL & assert title', async () => {
        // Open URL
        await browser.url('https://webdriver.io/');

        // Assert title
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });

    it('Open Sponsor & assert URL', async () => {
        // Open Sponsor Page
        await browser.url('https://webdriver.io/docs/sponsor/');

        // Assert URL
        await expect(browser).toHaveUrl('https://webdriver.io/docs/sponsor/');
    });

    it('Click get started btn & assert url contains get-started text', async () => {
        // given
        const url = 'https://webdriver.io';

        // when
        await browser.url(url);
        await $('a[href="/docs/gettingstarted"]').click();

        // Take a screenshot after clicking "Get Started"
        await browser.saveScreenshot('./screenshots/after_click.png');
        await browser.pause(5000);
        // then
        await expect(browser).toHaveUrl(expect.stringContaining('gettingstarted'));
    });
});


