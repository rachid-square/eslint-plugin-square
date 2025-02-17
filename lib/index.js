'use strict';

const requireIndex = require('requireindex');

module.exports = {
  rules: requireIndex(`${__dirname}/rules`),
  configs: requireIndex(`${__dirname}/config`),
  utils: {
    filenames: require('./utils/filenames'),
    ASYNC_EMBER_TEST_HELPERS: require('./utils/async-ember-test-helpers'),
  },
};
