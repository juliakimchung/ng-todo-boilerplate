"use strict";
app.controller ('itemViewCtrl', function($scope, ItemStorage, $routeParams){
  //$scope.welcome = "Let's have some fun!";
  console.log("routeParams PMF", $routeParams.itemId );
  ItemStorage.getSingleItem($routeParams.itemId)
  .then((itemObject) => {

  $scope.selectedItem = itemObject;
  $scope.$apply();

  });
  
});