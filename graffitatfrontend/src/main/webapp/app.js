var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
	
	$routeProvider
	.when('/',{
		redirectTo : '/home'
		
	})
	.when('/home',{
		templateUrl : 'home.html',
		controller : 'homeController'
		
	})
	.when('/login',{
		templateUrl : 'home.html',
		controller  : 'homeController'
	})
	.when('/signup',{
	    templateUrl : 'signup.html',
	    controller  : 'signupController'
	  })
	
	.when('/load',{
	
		templateUrl : 'load.html',
		controller  : 'loadController'
		
	})  
	.when('/logout',{
	
		template : '',
		controller  : ''
		
	})
	.otherwise({
		redirectTo : '/home'
    });
});