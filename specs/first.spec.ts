import { browser } from "protractor";

describe('Protractor, Jasmine and Typescript', () => {

    it('Verify page title', async () => {
        browser.get('https://angularjs.org/');
        console.log(await browser.getTitle());
    });
    
});