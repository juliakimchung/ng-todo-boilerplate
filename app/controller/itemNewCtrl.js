"use strict";
app.controller ('itemNewCtrl', function($scope, ItemStorage, $location, AuthFactory){
  $scope.newTask= {};
  $scope.title = "Add a new task";
  $scope.btnText = "Save new task";
  $scope.newTask = {
  	assignedTo: "",
  	dependencies: "",
  	dueDate:"",
  	location: "",
  	task: "",
  	urgency: "low",
  	isCompleted: false,
  	uid: 123
  };
   
   $scope.addNewItem = function(){
   console.log("you clicked on the new Item", $scope.newTask );
   
   
   console.log("you added a new item", $scope.newTask );
   ItemStorage.postNewItem($scope.newTask)
   .then((response) => {
   	$location.url("/items/list");
   	$scope.$apply();
   });
   };
  });

