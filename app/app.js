"use strict";
let app = angular.module("TodoApp", ["ngRoute"]);
 // app.constant('FBCreds','https://ng-todo-59260.firebaseio.com/');

app.config(function($routeProvider){

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	AuthFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists){
			resolve();
		}else{
			reject();
		}
	});
});


	$routeProvider
	.when("/", {
        templateUrl: "partials/login.html",
        controller: "LoginCtrl"
    })

	.when('/login', {
		templateUrl: 'partials/login.html',
		controller: 'LoginCtrl'
	})
	.when('/items/list',{
		templateUrl: 'partials/item-list.html',
		controller: 'itemListCtrl', 
		resolve: {isAuth}
	})
	.when('/items/new', {
		templateUrl: 'partials/item-form.html',
		controller: 'itemNewCtrl',
		resolve: {isAuth}
	})
	.when('/items/:itemId', {
		templateUrl: 'partials/item-details.html',
		controller: 'itemViewCtrl',
		resolve: {isAuth}
	})
	.otherwise('/items/list');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {

		apiKey:creds.key, 
		authDomain:creds.authDomain
	};
	firebase.initializeApp(authConfig);
});