'use strict';

const User = require('../../../lib/User');
const errors = require('../../../components/errors');

module.exports = {

  index: options => {
    const limit = parseInt(options.limit, 10) || 10;
    const offset = parseInt(options.offset, 10) || 0;
    return User.index(limit, offset);
  },

  show: options => {
    const id = parseInt(options.id, 10);
    if (!id) throw new errors.BadRequest(errors.Codes.InvalidId);

    return Promise.resolve()
        .then(() => User.show(id))
        .then(user => {
          if (!user) throw new errors.NotFound(errors.Codes.NoUser);
          return user;
        });
  },

  create: (req, res) => User.create(),

  update: (req, res) => User.update(),

  destroy: (req, res) => User.destroy()

};
