const puppeteer = require('puppeteer');
const android = puppeteer.devices['Pixel 2 XL'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(android);
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
})();