(function(){

'use strict';

angular.module('data')
.service('MenuDataService',MenuDataServiceCB);

MenuDataServiceCB.$inject = ["$http"];
function MenuDataServiceCB($http){

	var service = this;
	service.getAllCategories = function(){
    	console.log("getAllCategories called");
    	return $http({
      		method: "GET",
      		url : "https://coursera-jhu-default-rtdb.firebaseio.com/categories.json"
      	});
	}

	service.getItemsForCategory = function(categoryShortName){
		var myurl = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" + categoryShortName + ".json"; 
    	return $http({
      		method: "GET",
      		url : myurl
      	});
	}
}

})();
