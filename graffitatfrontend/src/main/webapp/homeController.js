app.controller("homeController",['$scope','$location','$window','$http',function(  $scope , $location, $window, $http){
	
	console.log('homeController');
	
	$scope.LoginEmail = 'asdf';
	$scope.LoginPassword = 'asfas';
	
	$scope.Login = function()
	{
		var json = 	{
				"Email" : $scope.LoginEmail ,
				"Password" : $scope.LoginPassword
			};

		console.log(json);
		
		$UserService.UserLogin(json).then(function(response){
			console.log(response);
			
			if( response.msg == 'Invalid Login' )
			{
				$scope.InvalidLogin = true;
				window.setTimeout(function(){
					$scope.$apply( $scope.InvalidLogin = false );					
				}, 5000);
			}	
			else
			{
				$window.sessionStorage.setItem("currentUser", $scope.LoginEmail);
				$location.path('/profile');
				$scope.LoginStatus = false;
			}
				
			
		});
	}
}]);