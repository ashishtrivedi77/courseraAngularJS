(function () {

'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
 $stateProvider

 .state('home', {
    url: '/',
    templateUrl: 'src/menulist/templates/home.template.html'
  })

.state('categories',{
	url:'/categories',
	templateUrl: 'src/menulist/templates/main.template.html',
	controller: 'MenuController as mctrl',
	resolve:{
		itemList:['MenuDataService',function(MenuDataService){
			return MenuDataService.getAllCategories();
		}]
	}
})
.state('items',{
		url :'/items/{categoryShortName}',
		templateUrl: 'src/menulist/templates/items.template.html',
		controller: 'ItemsController as itemsCtrl',
		resolve:{
			items:['$stateParams', 'MenuDataService',function($stateParams, MenuDataService){
				return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
			}]
		}	
	}

)};

})();
