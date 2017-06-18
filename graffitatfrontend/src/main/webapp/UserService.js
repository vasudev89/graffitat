'use strict';
app.service('UserService',['$http','$q','$rootScope', function($http,$q,$rootScope){
 
	console.log("UserService.......")

	var BASE_URL = 'http://localhost:9001/graffitatbackend/';
	return {
		UserLogin : function(item) {
			console.log(item);
			return $http.post(BASE_URL + 'login', item).then(
					function(response) {
						return response.data;
					}, function(errResponse) {
						console.error('Error while sending data');
						return $q.reject(errResponse);
					});
		}};
	
}])
