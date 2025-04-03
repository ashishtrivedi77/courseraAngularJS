(function(){

'use strict'

angular.module('MenuApp')
.component('menuItems',{
	templateUrl:'src/menulist/templates/menuitems.template.html',
	bindings: {
		mitems: '<'
	} 
});

})();