const puppeteer = require('puppeteer')
var fs = require('fs');
void(async () => {
    try {

        // const browser = await puppeteer.launch()
        //to open in website
        const browser = await puppeteer.launch({
            headless: false
        })

        const page = await browser.newPage()
        await page.goto("https://academia.srmist.edu.in/accounts/signin?_sh=false&hideidp=true&portal=10002227248&client_portal=true&servicename=ZohoCreator&service_language=en&serviceurl=https%3A%2F%2Facademia.srmist.edu.in%2F") //website you want to access


        await page.type('#Email', ''); // Add your valid SRM id which you used to login academia
        await page.type('#Password', ''); // Add Password here
        await page.click('input[type="button"]');
        //submit button if any on website
        // await page.$eval('#email', el => el.value = '');
        // await page.$eval('#password', el => el.value = '');
        // await page.click('input[type="button"]');


        await page.waitForNavigation();

        // take screenshot and save it
        fs.appendFile('mynewfile1.png', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });

        // create pdf of screenshot
        await page.pdf({
            path: './pdfs/page1.pdf'
        })
        await page.goto("https://academia.srmuniv.ac.in/#View:My_Attendance")
        await browser.close()

    } catch (error) {
        console.log(error)
    }
})()