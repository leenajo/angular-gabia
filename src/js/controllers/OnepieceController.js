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