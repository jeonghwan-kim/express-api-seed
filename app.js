/**
 * Created by Chris on 2016. 2. 15..
 * Main application file
 *
 */

// Setup default environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express'),
    app = express();

// Setup server
require('./config/express')(app);
require('./config/swagger')(app);
require('./routes')(app);

module.exports = app;


