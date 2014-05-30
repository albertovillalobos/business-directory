'use strict';

angular.module('businessDirectoryApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Deals',
      'link': '/deals'      
    }, {
      'title': 'Participants',
      'link': '/deals'      
    }, {
      'title': 'How it works',
      'link': '/deals'      
    }, {
      'title': 'Settings',
      'link': '/settings'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
