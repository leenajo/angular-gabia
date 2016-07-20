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