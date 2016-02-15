/**
 * Created by Chris on 2016. 2. 15..
 * Main application file
 *
 */

var express = require('express'),
    app = express();

// Setup server
require('./config/express')(app);
require('./routes')(app);

module.exports = app;


