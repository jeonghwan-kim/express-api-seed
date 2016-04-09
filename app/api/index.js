/**
 * Created by Chris on 2016. 4. 9..
 */

"use strict";

const _ = require('lodash');
const qs = require('querystring');
const config = require('../config/environment');
const errors = require('../components/errors');
const errorCodes = require('../config/environment').errorCodes;


let api = {
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
    next(new errors.NotFoundError());
  },

  error: (err, req, res, next) => {
    res
        .status(api._statusCode(err))
        .json({ error: api._formatHttpError(err) });
  },

  _statusCode: err => err.statusCode || 500,

  _formatHttpError: err => {
    return {
      errorCode: err.errorCode || errorCodes.UndefinedErrorCode,
      message: _.isString(err) ? error: err.message
    }
  }

};

module.exports = api;


