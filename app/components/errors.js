"use strict";

class ErrorCode {
  constructor (code, message) {
    this.code = code || 'undefinedErrorCode';
    this.message = message || 'undefined error code';
  }
}

const ErrorCodes = {
  EmailValidation:    new ErrorCode('emailValidation', 'email  alidation error'),
  BadRequest:         new ErrorCode('badRequest', 'BedRequest'),
  InvalidToken:       new ErrorCode('invalidToken', 'invalid token'),
  InvalidId:          new ErrorCode('invalidId', 'invalid id'),
  IncorrectPassword:  new ErrorCode('incorrectPassword', 'incorrect password'),
  NotFound:           new ErrorCode('notFound', 'Not Found'),
  NotFoundByToken:    new ErrorCode('notFoundByToken', 'not found user by this token'),
  NoUser:             new ErrorCode('noUser', 'no user account'),
  PasswordLength:     new ErrorCode('passwordLength', 'password length should be gte 6'),
  UndefinedErrorCode: new ErrorCode('undefinedErrorCode', 'undefined error code'),
  UserConflict:       new ErrorCode('userConflictError', 'already registered userId'),
};

class NotFound extends Error {
  constructor (errorCode) {
    super((errorCode && errorCode.message) || ErrorCodes.NotFound.message);
    this.statusCode = 404;
    this.error = errorCode || ErrorCodes.NotFound
  }
}

class BadRequest extends Error {
  constructor (message) {
    super(message || 'BadRequest');
    this.statusCode = 400;
    this.error = ErrorCodes.BadRequest
  }
}

class Conflict extends Error {
  constructor (message) {
    super(message || 'Conflict');
    this.statusCode = 409;
  }
}

class Unauthorized extends Error {
  constructor (message) {
    super(message || 'Unauthorized');
    this.statusCode = 401;
  }
}

module.exports = {
  NotFound: NotFound,
  BadRequest: BadRequest,
  Conflict: Conflict,
  Unauthorized: Unauthorized,

  Codes: ErrorCodes
};
