'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GOOGLE_API_KEY: '"AIzaSyA3FCIwXVeL0QUnQsGrctizFthqJk3vkYQ"',
  SERVER_URL: '"https://hack-yeaaah.herokuapp.com/apipie/api"'
});
