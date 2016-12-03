"use strict";
app.factory("ItemStorage", ($http, FBCreds) => {

	let getItemList = (user) => {
	 let items = [];

		return new Promise((resolve, reject) =>{
				 $http.get(`${FBCreds.URL}/items.json`)
				 	// ?orderBy="uid"&equalTo="${user}"`)
				.success((itemObject) => {
					let itemColletction = itemObject;
					Object.keys(itemColletction).forEach((key) => {
						console.log("itemColletction",itemColletction );
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

	let deleteItem = (itemId) => {
		return new Promise( (resolve, reject) => {
			$http.delete(`${FBCreds.URL}/items/${itemId}.json`)
			.success( () => {
				console.log("itemId after deleteItem()", itemId);
			resolve();
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


	return {getItemList, postNewItem, getSingleItem, deleteItem
	};
});