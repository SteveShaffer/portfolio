'use strict';


angular.module('portfolio.services', ['ngResource'])
  .factory('Project', ['$resource', function($resource) {
      return $resource('../data/projects.json');
  }])
;