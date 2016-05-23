'use strict';

const mock   = require('./mock/data');
const common = require('./lib/common');
const debug  = common.debug('koa-restql:test:setup');

before ('db setup', function (done) {

  let sequelize = common.sequelize;
  debug(sequelize.models.user.options);

  common.loadMockData().then(res => {
    done();
  }).catch(done);
})
