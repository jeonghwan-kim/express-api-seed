'use strict';

const logTags = require('./logTags');
let config;

let startupCheck = {
  check: () => {
    let errors = startupCheck._environmentVariables();
    if (errors.length) {
      startupCheck._printErrors(errors);
      process.exit();
    }
  },

  _environmentVariables: () => {
    let errors = [];

    if (['production', 'development', 'test'].indexOf(process.env.NODE_ENV) === -1) {
      process.env.NODE_ENV = 'development';
    }

    config = require('../config/environment');
    const checkList = config.checkList || [];

    return checkList.reduce((result, checkItem) => {
      let error = startupCheck._environmentVariable(checkItem);
      if (error) result.push(error);
      return result;
    }, errors);
  },

  _environmentVariable: envName => {
    return (!process.env.hasOwnProperty(envName) || !process.env[envName]) ?
        `${envName} is required` :
        false;
  },

  _printErrors: errors => {
    errors.forEach(error => console.error(logTags.StartupError, error));
  }
};

module.exports = startupCheck.check;
