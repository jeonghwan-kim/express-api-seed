'use strict';

const models = require('../app/models');
const logTags = require('../app/components/logTags');

module.exports = options => {
  return models.sequelize.sync(options || {force: false})
      .then(() => {
        return `${logTags.StartupInfo} Sync Database ${JSON.stringify(options)}`;
      });
};
