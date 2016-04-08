'use strict';

let config;

module.exports = function check() {
  let errors = _environmentVariables();
  if (errors.length) {
    _printErrors(errors);
    process.exit();
  }
};

function _environmentVariables() {
  let errors = [];

  if (['production', 'development', 'test'].indexOf(process.env.NODE_ENV) === -1) {
    process.env.NODE_ENV = 'development';
  }

  config = require('../config/environment');
  const checkList = config.checkList || [];

  return checkList.reduce((result, checkItem) => {
    let error = _environmentVariable(checkItem);
    if (error) result.push(error);
    return result;
  }, errors);
}

function _environmentVariable(envName) {
  return (!process.env.hasOwnProperty(envName) || !process.env[envName]) ?
      `${envName} is required` :
      false;
}

function _printErrors(errors) {
  errors.forEach(error => console.error(config.logTags.startupError, error));
}
