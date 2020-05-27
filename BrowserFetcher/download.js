const puppeteer = require('puppeteer');

(async () => {
  const browserFetcher = puppeteer.createBrowserFetcher(); // 771731
  await browserFetcher.download('389298', (downloadedBytes, totalBytes) => {
    // any code...
  });
})();
