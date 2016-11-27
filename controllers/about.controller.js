(function(){
  angular.module('myPortfolio')
    .controller('AboutController', ["$scope", "FeatureService", function ($scope, FeatureService) {
      const getColor = FeatureService.getColor;

      $scope.features = [
        {technology: 'HTML5', color: getColor()},
        {technology: 'CSS', color: getColor()},
        {technology: 'Javascript', color: getColor()},
        {technology: 'SaSS', color: getColor()},
        {technology: 'Bootstrap', color: getColor()},
        {technology: 'jQuery', color: getColor()},
        {technology: 'AJAX', color: getColor()},
        {technology: 'Asynchronous I/O', color: getColor()},
        {technology: 'Node.js', color: getColor()},
        {technology: 'React', color: getColor()},
        {technology: 'Redux', color: getColor()},
        {technology: 'Firebase', color: getColor()},
        {technology: 'RESTful Api', color: getColor()},
        {technology: 'MongoDb', color: getColor()},
        {technology: 'SQL', color: getColor()},
        {technology: 'Ruby', color: getColor()},
        {technology: 'Ruby on Rails', color: getColor()},
        {technology: 'Materialize', color: getColor()},
        {technology: 'Angular', color: getColor()},
        {technology: 'Express', color: getColor()},
        {technology: 'Gulp', color: getColor()},
        {technology: 'Git', color: getColor()},
        {technology: 'Mocha', color: getColor()},
        {technology: 'SocketIo', color: getColor()},
        {technology: 'PostgreSQL', color: getColor()},
        {technology: 'Google Map', color: getColor()},
        {technology: 'Ionic', color: getColor()},
        {technology: 'React Native', color: getColor()},
        {technology: 'Webpack', color: getColor()},
        {technology: 'Amazon Web Service', color: getColor()},
        {technology: 'AWS', color: getColor()},
        {technology: 'MEAN stack', color: getColor()},
        {technology: 'Team Management', color: getColor()},
        {technology: 'User Experience', color: getColor()},
        {technology: 'User Interface', color: getColor()},
        {technology: 'Agile Development', color: getColor()}
      ];

    }]);
})()

