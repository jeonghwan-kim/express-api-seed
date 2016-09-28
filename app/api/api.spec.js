'use strict';

const should = require('should');
const request = require('supertest');
const app = require('../');

describe('Errors', () => {

  describe('Not Found Error', () => {
    let _res;

    before('Request random api', done => {
      request(app)
          .get(`/${Date.now().toString()}`)
          .end((err, res) => {
            if (err) throw err;
            _res = res;
            done();
          });
    });

    it('should return 404 status code ', () => {
      _res.statusCode.should.be.equal(404);
    });

    it('should return error object', () => {
      _res.body.should.have.property('error');
      _res.body.error.should.have.property('code', 'notFound');
      _res.body.error.should.have.property('message');
    });
  });
});