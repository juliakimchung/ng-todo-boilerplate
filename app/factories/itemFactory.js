"use strict";
app.factory("ItemStorage", ($http, FBCreds) => {

	let getItemList = () => {
	 let items = [];

		return new Promise((resolve, reject) =>{
				$http.get(`${FBCreds.URL}/items.json`)
				.success((itemObject)=>{
					let itemColletction = itemObject;
					Object.keys(itemColletction).forEach((key) =>{
						itemColletction[key].id = key;
						items.push(itemColletction[key]);
					});
					resolve(items);
				})
				.error((error) => {
     //console.log("something went wrong");
     reject(error);
		});
		
	});
};
let getSingleItem = (itemId)=> {
	return new Promise((resolve, reject) =>{
		$http.get(`${FBCreds.URL}/items/${itemId}.json`)
		.success((itemObject) => {
			resolve(itemObject);
		})
		.error((error) => {
			reject(error);
		});
	});
// 	$scope.remove = function(item) { 
//   var index = $scope.items.indexOf(`${iemId}.json`);
//   $scope.items.splice(index, 1);     
// }
};



	let postNewItem = (newTask) => {
		return new Promise((resolve, reject)=>{
			$http.post(`${FBCreds.URL}/items.json`, angular.toJson(newTask))
			.success((obj) => {
				resolve(obj);
			})
			.error((error) => {
				reject(error);
			});
		});
	};
	//	items.push(newTask);

	return {getItemList, postNewItem, getSingleItem};


});






















