"use strict";

const morgan = require('morgan');

/**
 * morgan wrapper
 * @returns {morgan}
 */
module.exports = () => {
  
  // http://www.tldp.org/HOWTO/Bash-Prompt-HOWTO/x329.html
  const red = '\x1B[31m';
  const green = '\x1B[32m';
  const yellow = '\x1B[33m';
  const cyan = '\x1B[36m';
  const grey = '\x1B[37m';
  const endColor = '\u001b[0m'; // http://stackrun.info/qs?id=is35624801

  // Redefind method token
  morgan.token('method', (req, res) => {
    let color;
    if      (req.method === 'GET')    color = green;
    else if (req.method === 'POST')   color = cyan;
    else if (req.method === 'PUT')    color = yellow;
    else if (req.method === 'DELETE') color = red;
    else                              color = grey;
    return color + req.method + endColor;
  });

  // Redefine status token
  morgan.token('status', (req, res) => {
    let color;
    if      (res._statusCode < 300)  color = green;
    else if (res._statusCode < 400)  color = cyan;
    else if (res._statusCode < 500)  color = yellow;
    else if (res._statusCode < 600)  color = red;
    else                            color = grey;
    return color + res._statusCode + endColor;
  });

  // Create a token for request body
  morgan.token('body', (req, res) => {
    if (req.method.toUpperCase() === 'POST' || req.method.toUpperCase() === 'PUT') {
      return `Body: ${JSON.stringify(req.body)}`;
    }
  });

  return morgan(':method :url :status :response-time ms :body', {
    skip: (req, res) => /^\/swagger/.test(req.baseUrl)
  });
};
