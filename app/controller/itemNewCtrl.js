"use strict";
app.controller ('itemNewCtrl', function($scope, ItemStorage, $location){
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
  	//uid: go get the user
  };
   
   $scope.addNewItem = function(){
   console.log("you clicked on the new Item", $scope.newTask );
   
   
   console.log("you added a new item", $scope.newTask );
   ItemStorage.postNewItem($scope.newTask)
   .then((response) => {
   	$location.url("/item/list");
   	$scope.$apply();
   });
   };
  });