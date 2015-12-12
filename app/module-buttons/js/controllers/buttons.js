'use strict';


App.controller('ButtonsCtrl', [
    '$scope',
    function($scope) {
      $scope.checkClick = function(text){
        console.log(text);
      }

}]);