/* eslint-disable */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../dist/structure-ops.immutable.cjs');
} else {
  module.exports = require('./dist/structure-ops.immutable.develop.cjs');
}
