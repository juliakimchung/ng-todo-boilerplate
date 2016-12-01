"use strict";

app.controller ('TodoCtrl', function($scope, $location){
  $scope.welcome = "Let's have some fun!";
  $scope.showListView = true;
  $scope.newTask= {};

  $scope.newItem = function(){
    console.log("you cliked on the new item" );
    //$scope.showListView = false;
    $location.url("/items/new");
  };

  $scope.allItem = function(){
   console.log("you clicked on all items" );
   //$scope.showListView = true;
   $location.url("/items/list");
  };
  

  $scope.items = [
   {
   id: 0,
   task: "mow the lawn",
   isCompleted: false,
   dueDate: "12/5/17",
   assignedTo: "Greg",
   location: "Joe's house",
   urgency: "low",
   dependencies: "sunshine, clippers, hat, water, headphones"
   },
   {
   id: 1,
   task: "grade quizzes",
   isCompleted: false,
   dueDate: "12/5/15",
   assignedTo: "Christina",
   location: "NSS",
   urgency: "high",
   dependencies: "wifi, tissues, vodka"
   },
   {
   id: 2,
   task: "take a nap",
   isCompleted: false,
   dueDate: "5/21/16",
   assignedTo: "Joe",
   location: "Porch of lakefront cabin",
   urgency: "medium",
   dependencies: "hammock, silence"
   }
 ];
});