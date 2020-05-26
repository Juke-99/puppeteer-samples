//
// stackoverflow: What's the performance difference of puppeteer.launch() versus puppeteer.connect()?
// url: https://stackoverflow.com/questions/52431775/whats-the-performance-difference-of-puppeteer-launch-versus-puppeteer-connect
//

const puppeteer = require('puppeteer');
const { performance } = require('perf_hooks');

const iterations = 10000;

(async () => {
  let browser = await puppeteer.launch();
  const browserWSEndpoint = browser.wsEndpoint();

  browser.disconnect();

  const start_time = performance.now();

  for (let i = 0; i < iterations; i++) {
    browser = await puppeteer.connect({
      browserWSEndpoint,
    });

    browser.disconnect();
  }

  const end_time = performance.now();

  const total_time = end_time - start_time;
  const average_time = total_time / iterations;

  process.stdout.write (
      'Total Time:\t' + total_time + ' ms\n'
    + 'Average Time:\t' + average_time + ' ms\n'
    + 'Iterations:\t' + iterations.toLocaleString() + '\n'
  );

  process.exit();
})();