(function() {
  'use strict';
  angular
    .module('myPortfolio')
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$state'];

    function MainController($scope, $state) {
      $scope.title = 'Berry Zhong';
      $scope.subTitle = 'Front End Developer'
    }

})();
