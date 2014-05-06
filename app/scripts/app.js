'use strict';


angular.module('portfolio', [
  'ngRoute',
  'portfolio.directives',
  //'portfolio.controllers',
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/projects', { templateUrl: 'pages/projects.html'}) //, controller: ProjectsCtrl })
      .otherwise({ redirectTo: '/projects'})
    ;
  }])
;