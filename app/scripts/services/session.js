'use strict';

angular.module('businessDirectoryApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
