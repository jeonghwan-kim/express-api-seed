/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

const morgan = require('./morgan');
const bodyParser = require('body-parser');

const expressSettings = app => {
  let env = app.get('env');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (app.get('env') === 'development' || app.get('env') === 'production') {
    app.use(morgan());
  }

  if (process.env.NODE_ENV === 'test') {
    hideLog();
  }
};

function hideLog() {
  console.log = function() {};
  console.error = function() {};
}

module.exports = expressSettings;
