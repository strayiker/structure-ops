/* eslint-disable */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/structure-ops.cjs');
} else {
  module.exports = require('./dist/structure-ops.develop.cjs');
}
