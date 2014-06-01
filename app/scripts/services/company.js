// js/services/company.js
angular.module('businessDirectoryApp')

	// super simple service
	// each function returns a promise object 
	.factory('Company', function($http) {
		return {
			get : function() {
				return $http.get('/api/companies');
			},
			create : function(companyData) {
				return $http.post('/api/companies', companyData);
			},
			delete : function(id) {
				return $http.delete('/api/companies/' + id);
			}
		}
	});