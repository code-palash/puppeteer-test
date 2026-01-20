import puppeteer from "puppeteer"
const browserInit = async () => {
    let browser = await puppeteer.launch({
        headless: false
    })
    let page = await browser.newPage()
    await page.goto('https://developer.chrome.com/', {
        waitUntil: 'networkidle2'
    })
    return { browser, page }
}
const wait = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}
export const scrap = async (req, res) => {
    let { browser, page } = await browserInit()
    await page.setViewport({ width: 1080, height: 1024 });
    // page.on('request', request => {
    //     console.log(request.url());
    // });

    // page.on('response', response => {
    //     console.log(response.url());
    // });
    // netork interception
    await page.keyboard.press('/');
    await page.evaluate(async () => {
        console.log('hello puppeteer')
        // await wait(2)
    })
    // const element = await page.waitForSelector('div');
    // const element = await page.$$('div')
    // console.log(element)
    // await element.click(); // Just an example.
    // const title = await page.$eval('h2', el => el.textContent);
    // console.log(title);
    /*
    page.$() returns a single element matching a selector.
    page.$$() returns all elements matching a selector.
    page.$eval() returns the result of running a JavaScript function on the first element matching a selector.
    page.$$eval() returns the result of running a JavaScript function on each element matching a selector.
    */
    /*
     await page.pdf({
         path: 'hn.pdf',
     });
     */ //download pdf
    /**
    await page.screenshot({
        path: 'hn.png',
    });
    const fileElement = await page.waitForSelector('div');
    await fileElement.screenshot({
    path: 'div.png',
    });
     */ // screen shot
    
    await wait(2)
    browser.close()
    res.send(0)
}