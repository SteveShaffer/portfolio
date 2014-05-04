'use strict';


angular.module('portfolio.directives', [])
  .directive('project', function() {
    return {
      template: 'Name: {{project.name}} Description: {{project.description}}'
    };
;