/**
 * Created by Chris on 2016. 2. 15..
 * Main application routes
 */

module.exports = function (app) {
  app.use('/ping', require('./api/ping'));

  app.use('/', function (req, res) {
    res.json({message: 'hello world!'});
  });

};
