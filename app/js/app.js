'use strict';

/* App Module */

var App = angular.module('App', [
  'ngRoute',
  'Animations',

  'Controllers',
  //'Services',
  'Filters'
]);

App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Home', {
        templateUrl: 'partials/Home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/Home'
      });
  }]);
