/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

const api = require('./api/index');

module.exports = app => {
  app.use('/v1/ping', require('./api/v1/ping'));
  app.get('/', (req, res) => res.json({message: "Hello World!"}));

  app.use(api.error404);
  app.use(api.error);

};
