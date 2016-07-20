/*! clear-generated.js © yamoo9.net, 2016 */
'use strict';

var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('clear', shell.task(['rm -rf .tmp test/* src/css/* src/js/*.bundle.* src/js/*-custom.*']));