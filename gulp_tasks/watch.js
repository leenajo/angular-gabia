/*! watch.js © yamoo9.net, 2016 */
'use strict';

var gulp = require('gulp');

gulp.task('watch', ['browserify:watch', 'sass:watch']);