'use strict';

angular.module('businessDirectoryApp')
  .controller('AdminCtrl', function ($scope, $http, Company) {


  	$scope.formData = {};




// Create a fucking company object and put it in the DB!
  	$scope.createCompany = function() {

  		// check if it's not empty first
  		if (!$.isEmptyObject($scope.formData)) {
  			// Send the post to the API
	  		$http.post('/api/companies', $scope.formData)
	  			.success( function(data) {
	  				$scope.formData = {};
	  				console.log(data);
	  			})
  		}
  	}

  });