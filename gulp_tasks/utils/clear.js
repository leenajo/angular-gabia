/*! clear.js © yamoo9.net, 2016 */
'use strict';
var del   = require('del');
var log   = require('./log');

// 클리어 함수 모듈 공개
module.exports = (path, done)=> {
  log('클리어: ' + path, 'red');
  del(path, done);
};