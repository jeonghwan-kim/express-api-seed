'use strict';

const models = require('../models');

exports.index = (limit, offset) => {
  return models.User.findAll({
    limit: limit,
    offset: offset
  });
};

exports.show = id => {
  return models.User.findOne({
    where: {
      id: id
    }
  })
};

exports.create = options => {
  return Promise.resolve('create');
};

exports.update = options => {
  return Promise.resolve('update');
};

exports.destroy = options => {
  return Promise.resolve('destroy');
};