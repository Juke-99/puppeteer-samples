const puppeteer = require('puppeteer');
const axios = require('axios');

(async () => {
  const url = 'http://localhost:9222';
  const response = await axios.get(url + '/json/version');
  const {webSocketDebuggerUrl} = response.data;
  console.info('webSocketUrl: ' + webSocketDebuggerUrl)

  // Connecting the instance using `browserWSEndpoint`
  const browser = await puppeteer.connect({
    browserWSEndpoint: webSocketDebuggerUrl,
    
  });
  console.info(browser);

  await browser.close();
})();
