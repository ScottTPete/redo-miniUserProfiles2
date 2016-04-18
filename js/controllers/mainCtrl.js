angular.module('userProfiles')
	.controller('mainCtrl', function($scope, mainSvc) {


	//calls mainSvc.getUSers to get their data. puts data on scope when it has data 
	$scope.getUsers = function() {
		mainSvc.getUsers().then(function (response) {
			console.log(response)
			$scope.users = response
		})
	};
	//must be invoked to do anything
	$scope.getUsers()
})