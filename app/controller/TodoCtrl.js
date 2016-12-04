"use strict";

app.controller ('TodoCtrl', function($scope, $location){
  // $scope.welcome = "Let's have some fun!";
  // $scope.showListView = true;
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
   $scope.$apply();
  };
  $scope.addNewItem = function (){
  $scope.newTask.isCompleted = false;
  $scope.newTask.id = $scope.Items.length;
  $scope.items.push($scope.newTask);
  $scope.newTask = {};
};


  
});