const chromeLauncher = require('chrome-launcher');

// Optional: set logging level of launcher to see its output.
// Install it using: npm i --save lighthouse-logger
// const log = require('lighthouse-logger');
// log.setLevel('info');

function launchChrome(headless = true) {
  return chromeLauncher.launch({
    port: 9222,
    chromeFlags: [
      '--disable-extensions',
      '--window-size=1080,720',
      '--disable-gpu',
      '--mute-audio',
      headless ? '--headless' : ''
    ],
    logLevel: 'info'
  });
}

launchChrome().then(chrome => {
  console.log(`Chrome debuggable on port: ${chrome.port}`);
}).catch(error => {
  console.error;
  chrome.kill();

  throw error;
});