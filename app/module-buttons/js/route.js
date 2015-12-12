'use strict';

App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buttons', {
    templateUrl: 'module-buttons/views/buttons.html',
    controller: 'ButtonsCtrl'
  });
}]);