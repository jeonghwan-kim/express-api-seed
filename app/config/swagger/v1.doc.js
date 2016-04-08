"use strict";

module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "express-es6-rest-api",
    "description": "express-es6-rest-api API Documents",
    "termsOfService": "",
    "contact": {
      "name": "Chris, WePlanet"
    },
    "license": {},
    "version": "1.0.0"
  },
  "host": "",
  "basePath": "/v1",
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],

  paths: {
    '/ping': {
      get: {
        tags: ['Ping'],
        description: 'Get pingpong message',
        operationId: 'getPing',
        produces: [
          'application/json'
        ],
        parameters: [

        ],
        responses: {
          200: {
            description: 'Success',
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string'
                }
              }
            }
          }
        }
      }
    },
  },

  "definitions": {
  }
};
