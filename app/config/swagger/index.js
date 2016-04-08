'use strict';

const express = require('express');
const path = require('path');

function setupSwaggerDocument(app, version) {
  app.get('/swagger/doc', (req, res) => {
    res.json(require(`./${version}.doc.js`));
  });
}

function setupSwaggerUi(app) {
  app.use('/swagger', (req, res, next) => {
    if (req.url === '/') res.redirect('/swagger?url=doc');
    else next();
  }, express.static(path.join(__dirname, '../../../node_modules/swagger-ui/dist')));
}

module.exports = function setup(app) {
  setupSwaggerDocument(app, 'v1');
  setupSwaggerUi(app);
};
