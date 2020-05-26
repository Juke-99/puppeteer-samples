const puppeteer = require('puppeteer');
const axios = require('axios');

(async () => {
  const url = 'http://localhost:9222';
  // const url = 'https://github.com'
  // const response = await axios.get(url + '/json/version');
  // const {webSocketDebuggerUrl} = response.data;
  // console.info('webSocketUrl: ' + webSocketDebuggerUrl)

  // options <Object>
  //   browserWSEndpoint <?string> a browser websocket endpoint to connect to.
  //   browserURL <?string> a browser url to connect to, in format http://${host}:${port}. Use interchangeably with browserWSEndpoint to let Puppeteer fetch it from metadata endpoint.
  //   ignoreHTTPSErrors <boolean> Whether to ignore HTTPS errors during navigation. Defaults to false.
  //   defaultViewport <?Object> Sets a consistent viewport for each page. Defaults to an 800x600 viewport. null disables the default viewport.
  //       width <number> page width in pixels.
  //       height <number> page height in pixels.
  //       deviceScaleFactor <number> Specify device scale factor (can be thought of as dpr). Defaults to 1.
  //       isMobile <boolean> Whether the meta viewport tag is taken into account. Defaults to false.
  //       hasTouch<boolean> Specifies if viewport supports touch events. Defaults to false
  //       isLandscape <boolean> Specifies if viewport is in landscape mode. Defaults to false.
  //   slowMo <number> Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.
  //   transport <ConnectionTransport> Experimental Specify a custom transport object for Puppeteer to use.
  //   product <string> Possible values are: chrome, firefox. Defaults to chrome.
  // const browser = await puppeteer.connect({
  //   defaultViewport: {
  //     width: 1920,
  //     height: 1080,
  //   },
  // });

  const browserFetcher = await puppeteer.createBrowserFetcher();
  // console.info(browserFetcher);
  
  const defaultArgs = await puppeteer.defaultArgs();
  // console.info('defaultArgs: --------------');
  // console.info(defaultArgs);

  // console.info('executablePath: ' + puppeteer.executablePath());

  const browser = puppeteer.launch({
    dumpio: process.stdout
  });

  await browser.close();
})();
