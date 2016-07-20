/*! custom-modernizr.js © yamoo9.net, 2016 */
'use strict';

var gulp      = require('gulp');
var modernizr = require('gulp-modernizr');
var uglify    = require('gulp-uglify');
var config    = require('../gulp.config');

gulp.task('modernizr', ()=> {
  gulp
    .src(config.modernizr.src)
    .pipe(modernizr(config.modernizr.output_filename, config.modernizr.options))
    .pipe(uglify())
    .pipe(gulp.dest(config.modernizr.output));
  return gulp;
});