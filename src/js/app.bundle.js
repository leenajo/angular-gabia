(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! app.js © markupbang.com, 2016 */
'use strict';

/**
 * --------------------------------
 * 모듈 로드
 * ----------------------------- */
//require('./modernizr-custom');

// -----------------------------------------------------
// AngularJS 모듈 정의
// -----------------------------------------------------
angular.module('DemoApp',['ngAria']);

// -----------------------------------------------------
// 컨트롤러 모듈 호출
// -----------------------------------------------------
require('./controllers/RegisterController');
require('./controllers/OnepieceController');


// 방법 1.
// angular.module('DemoApp').controller('MyController', ['$scope', function($scope){
//   $scope.prop = true;
// }]);

// 방법 2.
// function _MyCtrl2($scope) {}
// _MyCtrl2.$inject = ['$scope'];
// angular.module('DemoApp').controller('MyController2', _MyCtrl2);
},{"./controllers/OnepieceController":2,"./controllers/RegisterController":3}],2:[function(require,module,exports){
'use strict';
/*! OnepieceController.js © markupbang.com, 2016 */

var _oneCtrl = function($scope, $http) {

  // 초기 설정 값
  $scope.member_search = '';     // 검색 필드는 비움
  $scope.order = 'name';         // 이름으로 정렬
  $scope.order_reverse = false;  // 오름 차순
  $scope.onepieceMembers = null; // 멤버 리스트

  // 원피스 멤버 리스트 모델 데이터
  // 비동기로 데이터 받아오기
  $http
    .get('../data/onepiece.json')
    .then(function(response) {
      $scope.onepieceMembers = response.data;
    });

  // 컨트롤러 메소드 등록
  $scope.toggleOrder = function() {
    $scope.order_reverse = !$scope.order_reverse;
  };

};

// 압축 과정에서 모듈 이름을 보존할 수 있도록 조치
_oneCtrl.$inject = ['$scope', '$http'];

// 원피스 컨트롤러 정의
angular.module('DemoApp').controller('OnepieceController', _oneCtrl);
},{}],3:[function(require,module,exports){
'use strict';
/*! RegisterController.js © markupbang.com, 2016 */

angular.module('DemoApp')
.controller('RegisterController', ['$scope', '$http',
  function($scope, $http) {

  // 지역 변수
  // 외부에서 접근 불가
  var _formModel = {};
  var _onSubmit = function(form) {
    // console.log('사용자가 전송한 폼은 유효한가?', form.$valid);
    if ( form.$valid ) {
      console.log('전송됨. :)');
      console.log(_formModel);
      // console.dir($http);
    } else {
      console.error('폼은 유효하지 않습니다. 다시 작성해주세요.');
      // console.dir(form);
      // 이메일 검증이 안된 상태
      // console.log($ === angular.element);
      // angular.element('#user-email').addClass('has-error');
      // console.log( $('#user-email') );
      $('#user-email')
        .closest('.form-group').addClass('has-error')
        .end().focus();
    }
  };

  // 외부에 공개
  $scope.formModel = _formModel;
  $scope.onSubmit  = _onSubmit;

}]);
},{}]},{},[1]);

//# sourceMappingURL=app.bundle.js.map
