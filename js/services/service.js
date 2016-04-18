angular.module('userProfiles')
	.service('mainSvc', function($http) {


	//gets data from api using $http get, then promises to get data and return that data
	this.getUsers = function () {
		return $http({
			method: 'GET',
			url: 'http://reqres.in/api/users?page=1'
		}).then(function(response) {
			console.log(response)
			return response.data.data;
		})
		
	}








});
