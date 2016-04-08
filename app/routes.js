/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

module.exports = app => {
  app.use('/v1/ping', require('./api/v1/ping'));

  app.get('*', (req, res) => {
    res.json({message: "Hello World!"});
  });
};
