(function(){
  'use strict';
  angular
    .module('myPortfolio')
    .controller('ProjectsController', ProjectsController)

  ProjectsController.$inject = ['$scope'];

  function ProjectsController($scope) {


    $scope.health_features = ['Ruby on Rails', 'PostgreSQL', 'HTML5', 'CSS', 'Javascript']

    const colorClass = ['pink lighten-3', 'indigo lighten-2', 'lime accent-1', 'amber accent-2',
    'grey darken-2', 'deep-orange darken-1', 'green accent-2', 'teal', 'purple', 'red darken-1',
    'yellow lighten-3', 'light-green', 'indigo accent-3', 'pink accent-3', 'pink lighten-1'];

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

    function getColor() {
      return colorClass[Math.floor(Math.random()*colorClass.length)]
    }

  }
})()
