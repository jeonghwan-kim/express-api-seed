/**
 * Created by Chris on 2016. 2. 15..
 */

var _ = require('lodash'),
    path = require('path');

// All configurations will extend these options
var all = {
  env: process.env.NODE_ENV,
};

// Export the config object based on the NODE_ENV
module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});
