(function(){

angular.module('MenuApp').
controller('ItemsController',ItemsControllerCB);

ItemsControllerCB.$inject=['items'];
function ItemsControllerCB(items){
	var itemsCtrl = this;
	itemsCtrl.menuitems = items.data.menu_items;
}

})();