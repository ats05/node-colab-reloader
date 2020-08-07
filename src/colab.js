const webdriver = require('selenium-webdriver');
const { Builder, By, until } = webdriver;
const capabilities = webdriver.Capabilities.chrome();
const chrome = require('selenium-webdriver/chrome');

//
let driver = new webdriver.Builder()
          .forBrowser('chrome')
          // .setChromeService(new chrome.ServiceBuilder("/usr/local/bin/chromedriver"))
          .build();

exec = (async () => {
    try {
        // const chrome = require('selenium-webdriver/chrome')
        // const capabilities = webdriver.Capabilities.chrome();
        // capabilities.set('chromeOptions', {
        //     args: [
        //         '--headless',
        //         '--no-sandbox',
        //         '--disable-gpu',
        //         `--window-size=1980,1200`
        //     ]
        // });
        //
        // driver = await new Builder()
        //     .withCapabilities(capabilities)
        //
        //     .build();
        //
        console.log("start!")

    }
    catch(e) {
        console.error(e);
    }
    finally {
        // driver.quit;
        driver.quit();
    }
})


exec()
