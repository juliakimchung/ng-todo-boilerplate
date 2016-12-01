"use strict";

app.controller ('itemListCtrl', function($scope, ItemStorage){
  ItemStorage.getItemList()
  .then((itemArray) => {
    $scope.items = itemArray;
    $scope.$apply();
  });
});
 
