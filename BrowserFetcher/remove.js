const puppeteer = require('puppeteer');

(async () => {
  const browserFetcher = puppeteer.createBrowserFetcher(); // 771731
  await browserFetcher.remove('389298');
  // .download('389298', (downloadedBytes, totalBytes) => {
  //   // any code...
  // });
})();