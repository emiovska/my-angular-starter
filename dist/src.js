'use strict';
// Source: app/app.js
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


// Source: app/index.js
angular.module("myApp").controller("IndexCtrl",[
  '$scope',
  '$mdSidenav',
  function($scope,$mdSidenav){
    $scope.showMobileMainHeader = true;
    $scope.openSideNavPanel = function () {
      $mdSidenav('left').open();
    };
    $scope.closeSideNavPanel = function () {
      $mdSidenav('left').close();
    };

}]);


// Source: app/module-buttons/js/controllers/buttons.js
App.controller('ButtonsCtrl', [
    '$scope',
    function($scope) {
      $scope.checkClick = function(text){
        console.log(text);
      }

}]);
// Source: app/module-buttons/js/route.js
App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/buttons', {
    templateUrl: 'module-buttons/views/buttons.html',
    controller: 'ButtonsCtrl'
  });
}]);



// Source: app/module-charts/js/controllers/dashboard.js
App.controller('DashboardCtrl', [
    '$scope',
    function ($scope) {

      var chart1 = {};
      chart1.type = "google.charts.Bar";
      chart1.displayed = false;
      chart1.data = {
        "cols": [{
          id: "month",
          label: "Month",
          type: "string"
        }, {
          id: "laptop-id",
          label: "Laptop",
          type: "number"
        }, {
          id: "desktop-id",
          label: "Desktop",
          type: "number"
        }, {
          id: "server-id",
          label: "Server",
          type: "number"
        }, {
          id: "cost-id",
          label: "Shipping",
          type: "number"
        }],
        "rows": [{
          c: [{
            v: "January"
          }, {
            v: 19,
            f: "42 items"
          }, {
            v: 12,
            f: "Ony 12 items"
          }, {
            v: 7,
            f: "7 servers"
          }, {
            v: 4
          }]
        }, {
          c: [{
            v: "February"
          }, {
            v: 13
          }, {
            v: 1,
            f: "1 unit (Out of stock this month)"
          }, {
            v: 12
          }, {
            v: 2
          }]
        }, {
          c: [{
            v: "March"
          }, {
            v: 24
          }, {
            v: 5
          }, {
            v: 11
          }, {
            v: 6
          }

          ]
        }]
      };
      chart1.options = {
        "title": "Sales per month",
        "isStacked": "true",
        "backgroundColor": '#E4E4E4',
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
          "title": "Sales unit",
          "gridlines": {
            "count": 10
          }
        },
        "hAxis": {
          "title": "Date"
        },
        chartArea:{
          backgroundColor: '#fcfcfc'
        }
      };
      $scope.myChart = chart1;


    }]);
// Source: app/module-charts/js/route.js
App.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/dashboard', {
    templateUrl: 'module-charts/views/dashboard.html',
    controller: 'DashboardCtrl'
  });
}])



// Source: app/module-icons/js/route.js
App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/icons', {
    templateUrl: 'module-icons/views/icons.html'
  });
}]);



// Source: app/module-inputs/js/controllers/inputs.js
'use-strict';

App.controller("InputsCtrl",[
  '$scope',
  function($scope){
    $scope.project = {
      description: 'Nuclear Missile Defense System',
      rate: 500
    };


    $scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '',
      company: 'Google',
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      })
  }]);
// Source: app/module-inputs/js/route.js
App.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inputs', {
    templateUrl: 'module-inputs/views/inputs.html',
    controller: 'InputsCtrl'
  });
}])

//# sourceMappingURL=src.js.map