/*! gulp.config.js © yamoo9.net, 2016 */
'use strict';

/**
 * ----------------------------------------------
 * 프로젝트 경로
 * ---------------------------------------------- */
var src   = './src/';
var dist  = './dist/';
var build = './build/';
var tmp   = './.tmp/';
var test  = './test/';

/**
 * ----------------------------------------------
 * BrowserSync 설정
 * 옵션: https://www.browsersync.io/docs/options/
 * ---------------------------------------------- */
var setting_browserSync = {
  'options': {
    'server': './src',
    'port'  : 9090,
    'files' : [src + '**/*'],
    'ghostMode': {
      'clicks'   : true,
      'location' : true,
      'forms'    : true,
      'scroll'   : true
    },
    'injectChanges'  : true,
    'logFileChanges' : true,
    'logLevel'       : 'debug',
    'logPrefix'      : 'gulp-process',
    'notify'         : false,
    'reloadDelay'    : 30 // 1000
  }
}

/**
 * ----------------------------------------------
 * Browserify 설정
 * ---------------------------------------------- */
var setting_browserify = {
  'options': {
    // 진입 파일 (번들링 시작 파일)
    'entries': [ src + 'js/app.js'],
    // 소스맵을 번들링된 파일에 포함
    // 'debug': false,
    // 번들링 속도 향상 (다만 파일 크기가 커짐)
    // 'insertGlobals': true
  },
  // 번들링 위치 설정
  'output': src + 'js',
  // 생성되는 번들링 파일 이름 설정
  'output_filename': 'app.bundle.js',
  // 분리된 소스맵 파일 위치 설정
  'sourcemaps': './',
  // 이미 존재하는 소스맵 파일 읽기 설정
  'read_sourcemap': true
};

/**
 * ----------------------------------------------
 * Sass 설정
 * ---------------------------------------------- */
var setting_sass = {
  'src': src + ['sass/**/*.s+(a|c)ss'],
  'output': src + 'css',
  'options': {
    // CSS 출력 스타일 설정
    // nested, compact, expanded, compressed
    'outputStyle': 'expanded',
    // 인덴트(들여쓰기) 설정
    // 'tab', 'space'
    'indentType': 'space',
    // 인덴트 폭 값 설정
    // 2~10
    'indentWidth': 2,
    // 수치 정확도 (소수점 이하 자리 수)
    'precision'   : 4,
    // 소스맵 작성 설정
    'sourceMap'   : true
  },
  // ------------------------------------------
  // Autoprefixer 설정
  'autoprefixer': {
    'browselist': [
      // 지역 설정
      '> 5% in KR',
      // 데스크탑 환경 설정
      'ie >= 11',
      'chrome >= 45',
      'ff >= 40',
      'safari >= 7',
      'opera >= 23',
      // 모바일 환경 설정
      'android >= 4.4',
      'ios >= 8',
      'ie_mob >= 10',
      'bb >= 10'
    ]
  },
  // ------------------------------------------
  // 소스맵 위치 설정
  'sourcemaps': './',
  // ------------------------------------------
  // 컴파일 된 파일 생성 위치 설정
  'del': [src + 'css']
}

/**
 * --------------------------------------------------------
 * Wiredep 설정
 * 옵션: https://github.com/taptapship/wiredep#configuration
 * -------------------------------------------------------- */
var bowerJson = require('./bower.json');
var setting_wiredep = {
  'index': src + 'index.html',
  'output': src,
  'options': {
    'bowerJson'  : bowerJson,
    'directory'  : bowerJson.directory || './src/bower_components',
    'ignorePath' : '..',
    'exclude'    : []
  }
};

/**
 * --------------------------------------------------------
 * gulp-inject 설정
 * 옵션: https://www.npmjs.com/package/gulp-inject
 * -------------------------------------------------------- */
var setting_inject = {
  'index': src + 'index.html',
  'output': src,
  'css': [
    src + 'css/**/*.css'
  ],
  'js': [
    '!'+src + 'js/**/*-custom.js',
    src + 'js/**/*.bundle.js'
  ],
  'relative': true
}

/**
 * --------------------------------
 * 모더나이저 설정
 * ----------------------------- */
var setting_modernizr = {
  'src'             : [src+'js/**/*.js'],
  'output'          : src + 'js',
  'output_filename' : 'modernizr-custom.js',
  'options': {
      // http://modernizr.com/download/
      'options' : [
          'addTest',
          // 'atRule',
          'domPrefixes',
          // 'hasEvent',
          // 'html5shiv',
          'html5printshiv',
          // 'load',
          'mq',
          // 'prefixed',
          // 'prefixes',
          // 'prefixedCSS',
          'setClasses',
          // 'testAllProps',
          // 'testProp',
          // 'testStyles'
      ],
      // https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
      'tests': [
        'cssall',
        'cssanimations',
        'cssappearance',
        'cssbackdropfilter',
        'cssbackgroundblendmode',
        'cssbackgroundcliptext',
        'cssbackgroundposition-shorthand',
        'cssbackgroundposition-xy',
        'cssbackgroundrepeat',
        'cssbackgroundsize',
        'cssbackgroundsizecover',
        'cssborderimage',
        'cssborderradius',
        'cssboxshadow',
        'cssboxsizing',
        'csscalc',
        'csschecked',
        'csschunit',
        'csscolumns',
        'csscubicbezierrange',
        'cssdisplayrunin',
        'cssdisplaytable',
        'cssellipsis',
        'cssescape',
        'cssexunit',
        'cssfilters',
        'cssflexbox',
        'cssflexboxlegacy',
        'cssflexboxtweener',
        'cssflexwrap',
        'cssfontface',
        'cssgeneratedcontent',
        'cssgradients',
        'csshairline',
        'csshsla',
        'csshyphens',
        'cssinvalid',
        'csslastchild',
        'cssmask',
        'cssmediaqueries',
        'cssmultiplebgs',
        'cssnthchild',
        'cssobjectfit',
        'cssopacity',
        'cssoverflow-scrolling',
        'csspointerevents',
        'csspositionsticky',
        'csspseudoanimations',
        'csspseudotransitions',
        'cssreflections',
        'cssregions',
        'cssremunit',
        'cssresize',
        'cssrgba',
        'cssscrollbars',
        'cssshapes',
        'csssiblinggeneral',
        'csssubpixelfont',
        'csssupports',
        'csstarget',
        'csstextalignlast',
        'csstextshadow',
        'csstransforms',
        'csstransforms3d',
        'csstransformstylepreserve3d',
        'csstransitions',
        'cssuserselect',
        'cssvalid',
        'cssvhunit',
        'cssvmaxunit',
        'cssvminunit',
        'cssvwunit',
        'csswill-change',
        'csswrapflow',
        'custom-protocol-handler',
        'customevent',
        'es6array',
        'es6collections',
        'es6contains',
        'es6generators',
        'es6math',
        'es6number',
        'es6object',
        'es6promises',
        'es6string'
      ],
      'excludeTests': []
    }
};


/**
 * ----------------------------------------------
 * 공개 모듈
 * ---------------------------------------------- */
module.exports = {
  'src'         : src,
  'dist'        : dist,
  'build'       : build,
  'tmp'         : tmp,
  'test'        : test,
  'browserify'  : setting_browserify,
  'sass'        : setting_sass,
  'wiredep'     : setting_wiredep,
  'inject'      : setting_inject,
  'browserSync' : setting_browserSync,
  'modernizr'   : setting_modernizr
};