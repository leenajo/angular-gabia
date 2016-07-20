/*! type.js © yamoo9.net, 2016 */
'use strict';

// Object.prototype 메소드 빌려쓰기
var toString = Object.prototype.toString;

// 모듈 공개
module.exports = function(data) {
  return toString.call(data).slice(8, -1).toLowerCase();
};
