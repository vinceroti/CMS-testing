'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
require('dotenv').config()

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONTENTSTACK_API: JSON.stringify(process.env.CONTENTSTACK_API),
  CONTENTSTACK_TOKEN: JSON.stringify(process.env.CONTENTSTACK_TOKEN)
})
