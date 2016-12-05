"use strict";
app.controller ('itemNewCtrl', function($scope, ItemFactory, $location, AuthFactory){
  
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
  	uid: ""
  };
   
   $scope.addNewItem = function(){
   console.log("you clicked on the new Item", $scope.newTask );
   
   ItemFactory.postNewItem($scope.newTask)
   .then((response) => {
   	$location.url("/items/list");
   	$scope.$apply();
   });
   };
  });