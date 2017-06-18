app.controller("loadController",['$scope','$location','$window','$http',function(  $scope ,  $location, $window, $http){
	
	console.log('loadController');
	
	if( $window.sessionStorage.getItem("currentUser") != null && $window.sessionStorage.getItem("currentUser") != undefined )
	{
		$scope.LoginEmail = $window.sessionStorage.getItem("currentUser");
		$scope.LoginStatus = false;
	}
	else
	{
		$scope.LoginStatus = true;
		$location.path('/home');
	}
	
	
	$scope.logout = function()
	{
		$window.sessionStorage.clear();
		$scope.LoginStatus = true;
		
		$location.path('/home');
	}
	
}]);