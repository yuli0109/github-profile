(function(){
  'use strict';
  angular
    .module('myPortfolio')
    .controller('ProjectsController', ProjectsController)

  ProjectsController.$inject = ['$scope', 'FeatureService'];

  function ProjectsController($scope, FeatureService) {

    const getColor = FeatureService.getColor;


    $scope.tripific_features = [
      {technology: 'GoogleMaps API', color: getColor()},
      {technology: 'Node.js', color: getColor()},
      {technology: 'MongoDB', color: getColor()},
      {technology: 'Yelp Api', color: getColor()},
      {technology: 'Bootstrap', color: getColor()}
    ];

    $scope.pokemon_features = [
      {technology: 'Javascript', color: getColor()},
      {technology: 'React', color: getColor()},
      {technology: 'Redux', color: getColor()},
      {technology: 'Firebase', color: getColor()},
      {technology: 'Pokemon Api', color: getColor()},
      {technology: 'OAUTH', color: getColor()}
    ];

    $scope.health_features = [
      {technology: 'Ruby on Rails', color: getColor()},
      {technology: 'PostgreSQL', color: getColor()},
      {technology: 'HTML5', color: getColor()},
      {technology: 'CSS', color: getColor()},
      {technology: 'Bootstrap', color: getColor()},
      {technology: 'Javascript', color: getColor()}
    ];

  }
})()
