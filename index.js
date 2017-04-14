'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./src/ex.js');
} else {
  module.exports = require('./src/ex.js');
}
