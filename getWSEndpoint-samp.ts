import * as http from 'http';
import * as https from 'https';
import * as URL from 'url'

function getWSEndpoint(browserURL: string): Promise<string> {
  let resolve, reject;
  
  const promise = new Promise<string>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  const endpointURL = URL.resolve(browserURL, '/json/version');
  const protocol = endpointURL.startsWith('https') ? https : http;
  
  const requestOptions = Object.assign(URL.parse(endpointURL), {
    method: 'GET',
  });

  const request = protocol.request(requestOptions, (res) => {
    let data = '';

    if (res.statusCode !== 200) {
      // Consume response data to free up memory.
      res.resume();
      reject(new Error('HTTP ' + res.statusCode));
      return;
    }

    res.setEncoding('utf8');
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => resolve(JSON.parse(data).webSocketDebuggerUrl));
  });

  console.info('request: ' + request)

  request.on('error', reject);
  request.end();

  return promise.catch((error) => {
    error.message =
      `Failed to fetch browser webSocket url from ${endpointURL}: ` +
      error.message;
    throw error;
  });
}

getWSEndpoint('http://localhost:9222');