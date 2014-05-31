'use strict';

angular.module('businessDirectoryApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/companies').success(function(companies) {
      $scope.companies = companies;
    });
  });
