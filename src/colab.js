const webdriver = require('selenium-webdriver');
const { Builder, By, until } = webdriver;
const capabilities = webdriver.Capabilities.chrome();

let driver = null;
exec = (async () => {
    try {
        const chrome = require('selenium-webdriver/chrome');

        driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            // .setChromeService(new chrome.ServiceBuilder("/usr/bin/chromium-browser"))
            .setChromeService(new chrome.ServiceBuilder("/usr/local/bin/chromedriver"))
            .build();



        // await driver.get('https://www.youtube.com/');

        // let el = await driver.findElement(By.tagName('body'));
        // console.log(el.getAttribute('innerHTML'))
    }
    catch(e) {
        console.error(e);
    }
    finally {
        driver.quit();
    }
})


exec()
