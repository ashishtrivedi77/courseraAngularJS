(function(){

'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuControllerCB);

MenuControllerCB.$inject=['itemList'];
function MenuControllerCB(itemList){
	var mctrl = this;
	mctrl.categories=itemList.data;
}
})();