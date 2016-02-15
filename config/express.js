/**
 * Created by Chris on 2016. 2. 15..
 */


var morgan = require('morgan'),
    bodyParser = require('body-parser');

module.exports = function(app) {
  var env = app.get('env');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};