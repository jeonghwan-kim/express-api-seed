/**
 * Created by Chris on 2016. 2. 15..
 */

var app = require('../app'),
    server;

app.set('port', process.env.PORT || 3000);

server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port);
});
