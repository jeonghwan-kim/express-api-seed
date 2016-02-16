/**
 * Created by Chris on 2016. 2. 15..
 */

var request = require('supertest'),
    should = require('should'),
    app = require('../../app');

describe('GET /ping', function () {
  it('should return object', function (done) {
    request(app)
        .get('/ping')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err;
          res.body.should.be.type('object').and.have.property('message', 'pong');
          done();
        });
  });
});
