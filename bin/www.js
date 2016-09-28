/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

let app = require('../app');
const logTags = require('../app/components/logTags');

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  let tag = logTags.StartupInfo;
  let port = server.address().port;
  let mode = process.env.NODE_ENV;
  console.log(`${tag} express-api-seed server listening on port ${port} ${mode} mode`);
});
