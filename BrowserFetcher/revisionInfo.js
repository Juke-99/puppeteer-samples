const puppeteer = require('puppeteer');

(async () => {
  const browserFetcher = puppeteer.createBrowserFetcher();

  console.info('host: ' + browserFetcher.host());

  await (browserFetcher.localRevisions()).then(revisions => console.info(revisions));

  console.info('platform: ' + browserFetcher.platform());
  console.info('product: ' + browserFetcher.product());

  const info1 = await browserFetcher.revisionInfo('389298');
  const info2 = await browserFetcher.revisionInfo('771731');
  const info3 = await browserFetcher.revisionInfo('385798');

  console.info(info1);
  console.info(info2);
  console.info(info3);
})();