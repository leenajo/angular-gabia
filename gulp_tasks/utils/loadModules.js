/*! loadModules.js © yamoo9.net, 2016 */
'use strict';

var type = require('./type');

// loadModules 모듈 정의
function loadModules(modules) {
  if ( type(modules) !== 'array' ) {
    return console.error('전달인자는 반드시 배열이어야 합니다.');
  }
  for (var module of modules) {
    require(module);
  }
}

// 모듈 공개
module.exports = loadModules;
