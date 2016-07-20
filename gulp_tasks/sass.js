'use strict';

// --------------------------------------------------
// 의존 모듈 로드
// --------------------------------------------------
var gulp        = require('gulp');
var config      = require('../gulp.config');
var log         = require('./utils/log');
var clear       = require('./utils/clear');
var $           = require('gulp-load-plugins')({'lazy': true});
var browserSync = require('browser-sync');

// --------------------------------------------------
// 프리프로세싱(Pre-Processing): Sass → CSS 업무 등록
// --------------------------------------------------
gulp.task('sass', ()=> {
  log('Sass → CSS 변환');
  return gulp
    .src(config.sass.src)
    // 소스맵 초기화
    .pipe( $.sourcemaps.init({'readMaps':true}) )
    // Sass 컴파일
    .pipe( $.sass(config.sass.options).on('error', $.sass.logError) )
    // 벤더 프리픽스 자동으로 처리
    .pipe( $.autoprefixer(config.sass.autoprefixer) )
    // 소스맵 쓰기
    .pipe( $.sourcemaps.write(config.sass.sourcemaps) )
    // 스트림 데이터 파일을 목적지에 실제 파일로 쓰기
    .pipe( gulp.dest(config.sass.output) );
});

gulp.task('sass:lint', ['sass'], ()=> {
  log('Sass 문법 검수');
  return gulp.src(config.sass.src)
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError());
});

gulp.task('sass:watch', ['sass'], ()=> {
  log('Sass 관찰 업무');
  gulp
    .watch(config.sass.src, ['sass'])
    .on('change',browserSync.reload);
});

// 임시(temp) 디렉토리에서 CSS 파일(소스맵 포함)을 찾아 제거
gulp.task('sass:clear', ()=> {
  log('sass 생성 디렉토리/파일 제거');
  clear(config.sass.del);
});
