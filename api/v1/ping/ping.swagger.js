/**
 * Created by Chris on 2016. 2. 16..
 */

module.exports = {
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
            descriptions: 'Success',
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
    }
  }
};
