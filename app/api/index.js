"use strict";

const _ = require('lodash');
const config = require('../config/environment');
const errors = require('../components/errors');


const api = {

  _statusCode: err => err.statusCode || 500,

  _formatHttpError: err => {

    return {
      code: err.error.code || errors.Codes.UndefinedErrorCode,
      message: err.error.message
    }
  },

  /**
   * Format HTTP Response
   * @param {Function} apiMethod 
   * @returns {Function} express middleware
   */
  http: apiMethod => {
    return (req, res, next) => {
      let options = _.extend({}, req.params, req.query, req.body);

      apiMethod(options)
          .then(result => {
            let statusCode = result._statusCode || 200;
            let body = result.body || result;
            delete result._statusCode;
            res.status(statusCode).json(body);
          })
          .catch(err => next(err));
    };
  },

  error404: (req, res, next) => {
    next(new errors.NotFound());
  },

  error: (err, req, res, next) => {
    res
        .status(api._statusCode(err))
        .json({ error: api._formatHttpError(err) });
  }

};

module.exports = api;


