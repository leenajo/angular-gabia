/*! log.js © yamoo9.net, 2016 */
/**
 * --------------------------------
 * 의존 모듈 로드
 * ----------------------------- */
// './' 값이 없는 형태로 로드하는 모듈 이름은 node_modules 디렉토리에서 참조
var util = require('gulp-util');
// './'를 사용하면 현재 파일 경로에서 상대적으로 모듈을 찾아서 로드
var type = require('./type');

/**
 * --------------------------------
 * 비공개 모듈(함수)
 * ----------------------------- */
function _log(message, color) {
  // color 변수 초기화
  color = color || 'blue';
  // 기록 메시지 폼
  util.log(util.colors[color]('───────────────────────────────'));
  util.log(' ' + util.colors[color](message));
  util.log(util.colors[color]('───────────────────────────────'));
}

/**
 * --------------------------------
 * 공개 모듈(함수)
 * --------------------------------
 */
function log(dataMessage, color) {
  // 1. dataMessage 존재 유무 확인
  if (!dataMessage) { return console.error('전달인자가 존재하지 않습니다.'); }

  // 2. dataMessage 객체 유형이 문자라면
  if (type(dataMessage) === 'string') {
    _log(dataMessage, color);
  }
  // 2. dataMessage 객체 유형이 객체라면
  if (type(dataMessage) === 'object') {
    // {'key': 'value', 'key': 'value', 'key': 'value'}
    for (var key in dataMessage) {
      // 객체 자신의 멤버만 사용하도록 처리해야 한다.
      if (dataMessage.hasOwnProperty(key)) {
        _log(dataMessage[key], color);
      }
    }
  }
}

/**
 * --------------------------------
 * 모듈 공개
 * ----------------------------- */
module.exports = log;
