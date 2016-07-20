/*! wiredep.js © yamoo9.net, 2016 */
'use strict';

// ----------------------------------------
// 의존 모듈 로드
// ----------------------------------------
var gulp    = require('gulp');
var config  = require('../gulp.config');
var wiredep = require('wiredep').stream;
var log     = require('./utils/log');

// ----------------------------------------
// 업무 등록
// ----------------------------------------
gulp.task('wiredep', ()=> {
  log('HTML 인젝션(wiredep)');
  gulp
    .src(config.wiredep.index)
    .pipe(wiredep(config.wiredep.options))
    .pipe(gulp.dest(config.wiredep.output));
  return gulp;
});