'use strict';
const merge = require('webpack-merge');
const devEnv = require('./dev.env');

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SERVER_URL: 'https://hack-yeaaah.herokuapp.com/apipie/api',
})
