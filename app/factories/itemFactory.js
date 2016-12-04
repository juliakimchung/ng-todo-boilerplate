"use strict";
app.factory("ItemFactory", ($http, FBCreds) => {

	let getItemList = () => {
	 let items = [];

		return new Promise((resolve, reject) =>{
				$http.get(`${FBCreds.URL}/items.json`)
				.success((itemObject)=>{
					let itemColletction = itemObject;
					console.log("itemColletction",itemColletction );
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

};

let deleteItem = (itemId)=> {
	return new Promise((resolve, reject) =>{
		$http.delete(`${FBCreds.URL}/items/${itemId}.json`)
		.success((itemObject) => {
			resolve(itemObject);
			console.log("itemObject after deleteSingleItem",itemObject );
		})
		.error((error) => {
			reject(error);
		});
	});

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

let updateItem = (itemId, editedItem) => {
	return new Promise( (resolve, reject) => {
		$http.patch(`${FBCreds.URL}items/${itemId}.json`, JSON.stringify(editedItem))
		.success( (itemObject) => {
		resolve(itemObject);
		})
		.error( (error) => {
		reject(error);
		});
	});
};

	//	items.push(newTask);

	return {getItemList, postNewItem, getSingleItem, deleteItem, updateItem};


});






















