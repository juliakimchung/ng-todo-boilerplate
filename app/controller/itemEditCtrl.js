"use strict";

app.controller("itemEditCtrl", function($scope, $location, $routeParams, ItemFactory){
	$scope.title = "Edit Item";
	$scope.btnText = "Edit";
	$scope.editedTask = {};


ItemFactory.getSingleItem($routeParams.itemId)
.then((newData) => {
	$scope.editedTask = newData;
});
$scope.runItemEdit = function(){
ItemFactory.updateItem($routeParams.itemId, $scope.editedTask)
	.then((newData) => {
		console.log("newData",newData );
		$location.url("/items/list");
		$scope.$apply()
		
	});
  };
})

