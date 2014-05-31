'use strict';

angular.module('businessDirectoryApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Deals',
      'link': '/'
    }, {
      'title': 'Participants',
      'link': '/participants'      
    }, {
      'title': 'How it works',
      'link': '/how-it-works'      
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
