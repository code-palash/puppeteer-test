import puppeteer from "puppeteer"
const browserInit=async()=>{
    let browser=await puppeteer.launch({
        headless:false
    })
    let page=await browser.newPage()
    page.goto('https://developer.chrome.com/',{
        waitUntil:'networkidle2'
    })
    return {browser,page}
}
const wait =async(seconds)=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },seconds*1000)
    })
}
export const scrap=async(req,res)=>{
    let {browser,page}=await browserInit()
    await page.setViewport({width: 1080, height: 1024});
    await page.keyboard.press('/');
    await page.evaluate(async()=>{
        console.log('hello puppeteer')
        // await wait(2)
    })
    const element = await page.waitForSelector('div');
    console.log(element)
    await element.click(); // Just an example.

    await wait(2)
    browser.close()
    res.send(0)
}