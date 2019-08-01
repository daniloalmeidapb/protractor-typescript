import { browser } from "protractor";

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Path files tests
    specs: ['../temp/specs/*.spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },

    onPrepare: () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
    }
}