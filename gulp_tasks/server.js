/*! server.js © yamoo9.net, 2016 */

'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var config      = require('../gulp.config');

gulp.task('serve:dev', function() {
  browserSync.init( config.browserSync.options );
});