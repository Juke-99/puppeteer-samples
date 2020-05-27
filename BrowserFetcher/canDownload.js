const puppeteer = require('puppeteer');

async function checkRevision(revision) {
  const browserFetcher = puppeteer.createBrowserFetcher();
  const isAvailable = await browserFetcher.canDownload(revision);

  if(isAvailable) {
    console.info('This revision is available.');
  } else {
    console.info('This revision isn\'t available.');
  }
}

checkRevision('771731'); // win64
checkRevision('1000583'); // This may release from now on but this isn't release at the moment.
checkRevision('78.0a1'); // If this product is Firefox, this result is true.
