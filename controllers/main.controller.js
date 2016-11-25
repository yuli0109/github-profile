(function() {
  'use strict';
  angular
    .module('myPortfolio')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
      $scope.title = 'Berry Zhong';
      $scope.names = ['sb', 'yz'];
    }

})();
