'use strict';

/* Controllers */

var Controllers = angular.module('Controllers', []);

Controllers.controller('HomeCtrl', ['$scope',
  function($scope) {
  	$scope.Hello = "Hello from Home Controller"
  }]);
