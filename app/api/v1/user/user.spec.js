'use strict';

const should = require('should');
const request = require('supertest');
const app = require('../../../');
const models = require('../../../models');
const helper = require('../../../components/test-helper');

describe('User', () => {
  before('Sync database', done => helper.syncDb(done));

  describe('GET /users', () => {
    let users = [{name: 'name1'}, {name: 'name2'}, {name: 'name3'}];
    before('Insert seed data', done => helper.insertSeed(models.User, users, done));
    after('Delete seed data', done => helper.deleteSeed(models.User, users, done));

    it('should return 200 status code and array', done => {
      request(app)
          .get('/v1/users')
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
           res.body.should.be.instanceOf(Array);
            done();
          });
    });
  });

  describe('GET /users/:id', () => {
    let users = [{name: 'name1'}];
    before('Insert seed data', done => helper.insertSeed(models.User, users, done));
    after('Delete seed data', done => helper.deleteSeed(models.User, users, done));

    it('should return 200 status code and an object', done => {
      request(app)
          .get('/v1/users/1')
          .expect(200)
          .end((err, res) => {
            if (err) throw err;
            res.body.should.be.instanceOf(Object);
            done();
          });
    });

    it('should return 400 status code on invalid id', done => {
      request(app)
          .get('/v1/users/abc')
          .expect(400)
          .end((err, res) => {
            if (err) throw err;
            res.body.should.have.property('error');
            res.body.error.code.should.be.equal('badRequest');
            done();
          });
    });

    it('should return 404 status code on no id', done => {
      request(app)
          .get('/v1/users/999')
          .expect(404)
          .end((err, res) => {
            if (err) throw err;
            res.body.should.have.property('error');
            res.body.error.code.should.be.equal('noUser');
            done();
          });
    });
  });

});
