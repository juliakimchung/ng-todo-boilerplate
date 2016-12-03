"use strict";
app.controller("navCtrl", function($scope, searchTermData){
  //$scope.navItems=[{name: "Logout"}, {name: "All Items"}, {name: "Add Items"}];
  $scope.searchText = searchTermData;
  $scope.navItems = [
  
  {	name: 'Login/Register',
  	url: "#/login"

  },
  {
  	name: "Logout",
  	url: "#/logout"
  },
  {
  	name: "All Items",
  	url: "#/items/list"
  },
  {
  	name: "Add Items",
  	url: "#/items/new"
  }
];

});