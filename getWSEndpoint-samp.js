"use strict";
exports.__esModule = true;
var http = require("http");
var https = require("https");
var URL = require("url");
function getWSEndpoint(browserURL) {
    var resolve, reject;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    var endpointURL = URL.resolve(browserURL, '/json/version');
    var protocol = endpointURL.startsWith('https') ? https : http;
    var requestOptions = Object.assign(URL.parse(endpointURL), {
        method: 'GET'
    });
    var request = protocol.request(requestOptions, function (res) {
        var data = '';
        if (res.statusCode !== 200) {
            // Consume response data to free up memory.
            res.resume();
            reject(new Error('HTTP ' + res.statusCode));
            return;
        }
        res.setEncoding('utf8');
        res.on('data', function (chunk) { return (data += chunk); });
        res.on('end', function () { return resolve(JSON.parse(data).webSocketDebuggerUrl); });
    });
    console.info('request: ' + request);
    request.on('error', reject);
    request.end();
    return promise["catch"](function (error) {
        error.message =
            "Failed to fetch browser webSocket url from " + endpointURL + ": " +
                error.message;
        throw error;
    });
}
getWSEndpoint('http://localhost:9222');
