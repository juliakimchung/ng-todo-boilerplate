"use strict";

app.controller("itemEdit", function($scope, $location, $routeParams, itemFactory){
	$scope.title = "Edit Item";
	$scope.btnText = "Edit";
	$scope.newTask = {};

itemFactory.getSingleItem($routeParams.itemId)
.then((newData) => {
	$scope.newTask = newData;
});
$scope.runItemEdit = () => {
	itemFactory.updateItem($routeParams.itemId, $scope.newTask)
	.then((newData) => {
		$location.url("/items/list");
	});
  };
});
