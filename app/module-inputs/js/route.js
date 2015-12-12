App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inputs', {
    templateUrl: 'module-inputs/views/inputs.html',
    controller: 'InputsCtrl'
  });
}])