/**
 * Created by Chris on 2016. 4. 9..
 */

"use strict";

class NotFoundError extends Error {
  constructor (message) {
    super(message || "Not Found");
    this.statusCode = 404;
    this.errorCode = 'NotFound'
  }
}

exports.NotFoundError = NotFoundError;
