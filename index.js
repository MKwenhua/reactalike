'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./src/dist/reactalike.js');
} else {
  module.exports = require('./src/dist/reactalike.js');
}
