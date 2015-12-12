App.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'module-charts/views/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])