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