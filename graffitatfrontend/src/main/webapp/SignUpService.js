'use strict';
app.service('SignUpService',['$http','$q','$rootScope', function($http,$q,$rootScope){
 
	console.log("SignUpService.......")

	var BASE_URL = 'http://localhost:9001/graffitatbackend/';
	return {
		signup : function(item) {
			return $http.post(BASE_URL + 'signup', item).then(
					function(response) {
						return response.data;
					}, function(errResponse) {
						console.error('Error while sending data');
						return $q.reject(errResponse);
					});
		}};
	
}])
