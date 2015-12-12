'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngMdIcons',
  'ngMessages',
  'googlechart'
]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);

