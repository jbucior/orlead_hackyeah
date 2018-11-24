'use strict';
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SERVER_URL: 'http://staging.ttmbpm5pc5.us-west-2.elasticbeanstalk.com/',
})
