"use strict";

app.controller("itemEdit", function($scope, $location, $routeParams, itemFactory){
	$scope.title = "Edit Item";
	$scope.btnText = "Edit";
	$scope.newTask = {};


itemFactory.getSingleItem($routeParams.itemId)
.then((newData) => {
	$scope.newTask = newData;
});
$scope.addNewItem = function(){
itemFactory.updateItem($routeParams.itemId, $scope.newTask)
	.then((newData) => {
		$location.url("/items/list");
		$scope.$apply()
		//$location.url("/item/edit");
	});
  };
})

// });
// "use strict";
// app.controller ('itemNewCtrl', function($scope, ItemFactory, $location, AuthFactory){
  
//   $scope.title = "Add a new task";
//   $scope.btnText = "Save new task";
//   $scope.newTask = {
//   	assignedTo: "",
//   	dependencies: "",
//   	dueDate:"",
//   	location: "",
//   	task: "",
//   	urgency: "low",
//   	isCompleted: false,
//   	uid: ""
//   };
   
//    $scope.runItemEdit = function(){
//    console.log("you clicked on the new Item", $scope.newTask );
   
//    ItemFactory.updateItem($scope.newTask)
//    .then((response) => {
//    	$location.url("/items/edit");
//    	$scope.$apply();
//    });
//    };
//   });