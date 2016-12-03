"use strict";

app.controller ('itemListCtrl', function($scope, ItemStorage, searchTermData){
 $scope.searchText = searchTermData;
  ItemStorage.getItemList()
  .then((itemArray) => {
    $scope.items = itemArray;
    $scope.$apply();
  });
$scope.remove = (itemId) => {
 ItemStorage.deleteItem(itemId)
 .then( (response) => {
     ItemStorage.getItemList()
     .then( (itemArray) => {
      $scope.items = itemArray;
      $scope.$apply();

      });
   });
 };
});