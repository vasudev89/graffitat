app.controller("signupController",['$scope','SignUpService','$location','$window','$http',function(  $scope , $SignUpService , $location, $window, $http){
	
	console.log('signupController');
	
	$scope.SignupSuccess = '';
	$scope.SignupFailure = '';

	if( ( $window.sessionStorage.getItem("currentUser") != null && $window.sessionStorage.getItem("currentUser") != undefined ) )
	{
		$location.path('/load');
	}
	
	
	$scope.logout = function()
	{
		$window.sessionStorage.clear();
		$scope.LoginStatus = true;
		
		$location.path('/home');
	}
	
	
	
	$scope.Username = '';
	$scope.UsernameError = false;
	$scope.UsernameTouched = false;
	$scope.ValidateUsername = function()
	{
		$scope.UsernameTouched = true;
		var reg = /^$/;
		$scope.UsernameError = reg.test( $scope.Username );
		$scope.CheckOverallError();
	}
	
	$scope.Email = '';
	$scope.EmailError = false;
	$scope.EmailTouched = false;
	$scope.ValidateEmail = function()
	{
		$scope.EmailTouched = true;
		var reg = /\S+@\S+\.\S+/;
		$scope.EmailError = !reg.test( $scope.Email );
		$scope.CheckOverallError();
	}

	$scope.Password = '';
	$scope.PasswordError = false;
	$scope.PasswordTouched = false;
	$scope.ValidatePassword = function()
	{
		$scope.PasswordTouched = true;
		var reg = /^.{8,20}$/;
		$scope.PasswordError = !reg.test( $scope.Password );
		$scope.ConfirmPasswordError = ( $scope.ConfirmPassword != $scope.Password );
		$scope.CheckOverallError();
	}

	$scope.ConfirmPassword = '';
	$scope.ConfirmPasswordError = false;
	$scope.ConfirmPasswordTouched = false;
	$scope.ValidateConfirmPassword = function()
	{
		$scope.ConfirmPasswordTouched = true;
		$scope.ConfirmPasswordError = ( $scope.ConfirmPassword != $scope.Password );
		$scope.CheckOverallError();
	}
	
	$scope.Location = '';
	$scope.LocationError = false;
	$scope.LocationTouched = false;
	$scope.ValidateLocation = function()
	{
		$scope.LocationTouched = true;
		var reg = /^$/;
		$scope.LocationError = reg.test( $scope.Location );
		$scope.CheckOverallError();
	}
	
	$scope.Phone = '';
	$scope.PhoneError = false;
	$scope.PhoneTouched = false;
	$scope.ValidatePhone = function()
	{
		$scope.PhoneTouched = true;
		var reg = /^[7-9][0-9]{9}$/;
		$scope.PhoneError = !reg.test( $scope.Phone );
		$scope.CheckOverallError();
	}
	
	$scope.Gender = 'Male';
	
	$scope.OverallError = true;
	$scope.CheckOverallError = function(){
		$scope.OverallError = 
					$scope.UsernameError || !$scope.UsernameTouched || 
					$scope.EmailError	|| !$scope.EmailTouched || 
					$scope.PasswordError || !$scope.PasswordTouched ||
					$scope.ConfirmPasswordError || !$scope.ConfirmPasswordTouched || 
					$scope.LocationError || !$scope.LocationTouched || 
					$scope.PhoneError || !$scope.PhoneTouched;
	
		//console.log( $scope.OverallError );
		
		$scope.PasswordMismatch = false;
	}

	$scope.Reset = function(){
		$scope.Username = $scope.Email = $scope.Password = $scope.ConfirmPassword = $scope.Location = $scope.Qualifications = $scope.Phone = $scope.Date = '';
		$scope.UsernameError = $scope.EmailError = $scope.PasswordError = $scope.ConfirmPasswordError = $scope.LocationError = $scope.QualificationsError = $scope.PhoneError = $scope.DateError = false;
		$scope.UsernameTouched = $scope.EmailTouched = $scope.PasswordTouched = $scope.ConfirmPasswordTouched = $scope.LocationTouched = $scope.QualificationsTouched = $scope.PhoneTouched = $scope.DateTouched = false;

		$scope.OverallError = true;
	}
	
	$scope.PasswordMismatch = false;
	
	$scope.ServerResponse = '';
	
	$scope.showSignupProgress = false;

	$scope.signupdone = false;
	$scope.signuperror = '';
	
	$scope.SubmitSignUp = function()
	{
		$scope.showSignupProgress = true;
		
			var day = $scope.Date.getDate(); //Date of the month: 2 in our example
			day = (day.length == 1)?"0" + day : day;
			var month = $scope.Date.getMonth() + 1; //Month of the Year: 0-based index, so 1 in our example
			month = (month.length == 1)?"0" + month : month;
			var year = $scope.Date.getFullYear() //Year: 2013

			var date = day + '-' + month + '-' + year;

			var json = 	{
					"Username" : $scope.Username,
					"Email" : $scope.Email ,
					"Password" : $scope.Password,
					//"ConfirmPassword" : $scope.ConfirmPassword,
					"Location" : $scope.Location,
					"Date" : date,
					"Phone" : $scope.Phone,
					"Gender" : $scope.Gender
				};
	
			console.log(json);
			
			$SignUpService.signup(json).then(
					function(response) {
						
						if( response.msg == 'User Added Successfully' )
						{
							$scope.signupdone = true;
							
							window.setTimeout(function(){
								$scope.$apply( $location.path('/login') );
							},1000);
						}
						else if( response.msg == 'User Already Exists' )
						{
							$scope.signuperror = 'User Already Exists';
							window.setTimeout(function(){
								$scope.$apply( $scope.signuperror = '' );
							},2000);
						}
						else
						{
							$scope.signuperror = 'Error adding User';
							window.setTimeout(function(){
								$scope.$apply( $scope.signuperror = '' );
							},2000);
						}
						
						$scope.showSignupProgress = false;
					}, function(errResponse) {
						console.error('Error while Sending Data.');
						$scope.showSignupProgress = false;
					});
	}
}]);