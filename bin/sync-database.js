'use strict';

const models = require('../app/models');
const logTags = require('../app/components/logTags');

module.exports = options => {
  return models.sequelize.sync(options || {force: false})
      .then(() => {
        const msg = `${logTags.StartupInfo} Sync Database ${JSON.stringify(options)}`;
        return Promise.resolve(msg);
      });
};
