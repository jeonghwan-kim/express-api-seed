/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

const should = require('should');
const request = require('supertest');
const app = require('../../../index');

describe('GET /ping', function () {
  it('should return object', () => {
    request(app)
        .get('/v1/ping')
        .expect(200)
        .end((err, res) => {
          if (err) throw err;
          res.body.should.be.type('object').and.have.property('message', 'pong');
        }) 
  });
});
