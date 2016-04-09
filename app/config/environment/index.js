"use strict";

const _ = require('lodash');

// All configurations will extend these options
let all = {
  
  // Usage: console.log(logTags, "message ... ")
  logTags: {
    startupInfo: '[STARTUP_INFO]',
    startupError: '[STARTUP_ERROR]',
  },
  
  errorCodes: {
    UndefinedErrorCode: 'UndefinedErrorCode'
  }
  
};

// Export the config object based on the NODE_ENV
module.exports = _.merge(all, require(`./${process.env.NODE_ENV}.js`) || {});
