(function(){
  'use strict';
  angular
    .module('myPortfolio')
    .config(Routes);

    Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function Routes($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('homePage', {
          url: '/',
          controller: 'HomeController',
          templateUrl: 'templates/home.html'
        })
        .state('aboutPage', {
          url: '/about',
          templateUrl: 'templates/about.html',
          controller: 'AboutController'
        })
        .state('projectsPage', {
          url: '/projects',
          templateUrl: 'templates/projects.html'
        })
        .state('contactPage', {
          url: '/contact',
          templateUrl: 'templates/contact.html',
        });
      $urlRouterProvider.otherwise('/');
    }
})()
