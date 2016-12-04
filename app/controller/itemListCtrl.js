"use strict";

app.controller ('itemListCtrl', function($scope, ItemFactory, searchTermData){
  $scope.searchText = searchTermData;

  ItemFactory.getItemList()
  .then((itemArray) => {
    $scope.items = itemArray;
    $scope.$apply();
  });
$scope.remove = (itemId) => {
 ItemFactory.deleteItem(itemId)
 .then( (response) => {
     ItemFactory.getItemList()
     .then( (itemArray) => {
      $scope.items = itemArray;
      $scope.$apply();

      });
   });
 };
});