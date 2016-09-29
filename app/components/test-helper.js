'use strict';

const syncDatabase = require('../../bin/sync-database');

exports.syncDb = done => {
  syncDatabase({force: true}).then(() => done());
};

exports.insertSeed = (model, seed, done) => {
  return model.bulkCreate(seed).then(() => done());
};

exports.deleteSeed = (model, seed, done) => {
  return model.destroy({
    where: {
      name: {
        in: seed.map(u => u.name)
      }
    },
    truncate: true
  }).then(() => done());
};