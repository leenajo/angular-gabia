'use strict';

// 모듈 로드
var requireDir = require('require-dir');

// recurse 옵션은 하위 디렉토리 파일까지 모두 탐색해서 처리
requireDir('./gulp_tasks/', {'recurse': true});