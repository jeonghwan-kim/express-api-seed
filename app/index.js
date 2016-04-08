/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

require('./components/startup-check')();

let app = require('express')();

require('./config/express')(app);
require('./config/swagger')(app);
require('./routes')(app);

module.exports = app;
