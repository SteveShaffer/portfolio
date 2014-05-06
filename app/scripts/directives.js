'use strict';


angular.module('portfolio.directives', [])
  .directive('project', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/project.html',
      scope: {
        name: '=',
        description: '='
      }
    };
  })
;