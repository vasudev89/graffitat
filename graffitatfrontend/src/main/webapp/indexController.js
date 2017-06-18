app.controller("indexController",['$scope','UserService','$location','$window','$http',function(  $scope ,$UserService, $location, $window, $http){

	console.log('indexController');
	
	$scope.LoginEmail = '';
	$scope.LoginPassword = '';

	$scope.InvalidLogin = true;
	
	if( ( $window.sessionStorage.getItem("currentUser") != null && $window.sessionStorage.getItem("currentUser") != undefined ) )
	{
		$location.path('/load');
	}
	
	$scope.Loading = false;
	
	$scope.Login = function()
	{
		var json = 	{
				"Email" : $scope.LoginEmail ,
				"Password" : $scope.LoginPassword
			};

		console.log(json);
	
		$scope.Loading = true;
		
		$UserService.UserLogin(json).then(function(response){
			console.log(response);
			
			if( response.msg == 'User Login Failed' )
			{
				$scope.InvalidLogin = false;
				window.setTimeout(function(){
					$scope.$apply( $scope.InvalidLogin = true );					
				}, 5000);
			}	
			else
			{
				$window.sessionStorage.setItem("currentUser", $scope.LoginEmail);
				$location.path('/load');
				$scope.LoginStatus = false;
			}
				
			$scope.Loading = false;
		});
	}
	
}]);