'use strict';

angular.module('businessDirectoryApp')
  .controller('AdminCtrl', function ($scope, $http) {
    $http.get('/api/companies').success(function(companies) {
      $scope.companies = companies;
    });
  });
