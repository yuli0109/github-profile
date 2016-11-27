(function() {
  angular.module('myPortfolio')
    .factory('FeatureService', FeatureService);

    FeatureService.$inject = []

    function FeatureService(){

      var service = {
        getColor
      }

      return service;

      function getColor() {
        const colorClass = ['pink lighten-3', 'indigo lighten-2', 'lime accent-1', 'amber accent-2',
          'grey darken-2', 'deep-orange darken-1', 'green accent-2', 'teal', 'purple', 'red darken-1',
          'yellow lighten-3', 'light-green', 'indigo accent-3', 'pink accent-3', 'pink lighten-1'
        ];
        return colorClass[Math.floor(Math.random()*colorClass.length)]
      }
    }

})();
