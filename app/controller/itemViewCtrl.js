"use strict";
app.controller ('itemViewCtrl', function($scope, ItemFactory, $routeParams){
  //$scope.welcome = "Let's have some fun!";
  console.log("routeParams PMF", $routeParams.itemId );
  ItemFactory.getSingleItem($routeParams.itemId)
  .then((itemObject) => {

  $scope.selectedItem = itemObject;
  $scope.$apply();

  });
  
});