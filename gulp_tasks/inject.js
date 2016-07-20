/*! inject.js © yamoo9.net, 2016 */
'use strict';

// ----------------------------------------
// 의존 모듈 로드
// ----------------------------------------
var gulp    = require('gulp');
var config  = require('../gulp.config');
var inject  = require('gulp-inject');
var log     = require('./utils/log');

// ----------------------------------------
// 업무 등록
// ----------------------------------------
gulp.task('inject', ()=> {
  log('HTML 인젝션(gulp-inject)');
  gulp
    .src(config.inject.index)
    .pipe(inject(gulp.src(config.inject.css, {'read': false}), {'relative': config.inject.relative}))
    .pipe(inject(gulp.src(config.inject.js, {'read': false}), {'relative': config.inject.relative}))
    .pipe(gulp.dest(config.inject.output));
  return gulp;
});