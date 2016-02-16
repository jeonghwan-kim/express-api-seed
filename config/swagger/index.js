/**
 * Created by Chris on 2016. 2. 15..
 */

var _ = require('lodash'),
    express = require('express'),
    path = require('path'),
    recursiveReaddir = require('recursive-readdir'),
    config = require('../environment');

function setupSwaggerDocument(app, version) {
  app.get('/swagger/doc', function (req, res) {
    swaggerDocument(version, function (err, documents) {
      if (err) throw err;
      res.json(documents);
    });
  });
}

function swaggerDocument(version, cb) {
  var apiRoot = path.join(__dirname, '../../api/' + version),
      baseDoc = require(path.join(__dirname, './' + version + '.doc.js'));

  baseDoc.host = config.domain.replace('http://', '') + ':' + config.port;

  function notSwaggerFile(file, stats) {
    return !stats.isDirectory() && !/\.swagger\.js/.test(file);
  }

  recursiveReaddir(apiRoot, [notSwaggerFile], function (err, files) {
    if (err) return cb(err);

    console.log(1,files)
    cb(null, _.reduce(files, function (result, doc) {
      return _.merge(result, require(doc));
    }, baseDoc));
  });
}

function setupSwaggerUi(app) {
  app.use('/swagger', function (req, res, next) {
    if (req.url === '/') {
      res.redirect('/swagger?url=doc');
    } else {
      next();
    }
  }, express.static(path.join(__dirname, '../../node_modules/swagger-ui/dist')));
}

module.exports = function (app) {
  setupSwaggerDocument(app, 'v1');
  setupSwaggerUi(app);
};
