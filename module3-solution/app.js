(function () {
'use strict';
/*
module function call returns module so you can call controller on it. $scope is used for sharing
data between view and viewmodel
*/
angular.module('MenuChecker', [])
.controller('NarrowItDownController', NarrowItDownControllerCB)
.service('MenuSearchService', MenuSearchServiceCB)
.directive('foundItems',FoundItems)

function FoundItems(){
  var ddo={
    templateUrl: "foundMenu.html",
    scope:{
      found : '<',
      displayWarning: '<',
      removeItem : '&onRemove'
    },
    controller: FoundItemsDirectiveContoller,
    bindToController: true,
    controllerAs: "dirCtrl",
  };
  return ddo;
}

function FoundItemsDirectiveContoller(){
  var dirCtrl = this;
}
NarrowItDownControllerCB.$inject=['MenuSearchService'];
function NarrowItDownControllerCB(MenuSearchService) {
  var ctrl = this; 
  ctrl.searchTerm="";
  ctrl.found=[];
  ctrl.displayWarning=false;
  ctrl.foundItems=function (searchTerm){
    if(!searchTerm.length){
        ctrl.found=[]
        ctrl.displayWarning=true
        return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
    promise.then(function(response){
      ctrl.found=response;
      if(!response.length){
        ctrl.found=[]
      }
      ctrl.displayWarning=!response.length

   })
   .catch(function(error){
      console.log(error);
      ctrl.searchTerm="";
      ctrl.found=[]
   });
   }

  ctrl.removeItem = function(itemIndex){
    if(itemIndex >=0 && itemIndex < ctrl.found.length)
      ctrl.found.splice(itemIndex,1);
  }
};
MenuSearchServiceCB.$inject=["$http"];
function MenuSearchServiceCB($http){
  var service=this;

  service.getMatchedMenuItems = function(searchTerm){
    return $http({
      method: "GET",
      url : "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json"
      }).then(function (result) {
        var foundItems = [];
    // process result and only keep items that match
          for(var key in result.data){
              var menuItems = result.data[key].menu_items;
              //console.log(menuItems);
              for(let i=0;i<menuItems.length;++i){
                  if(menuItems[i].description.includes(searchTerm))
                    foundItems.push({name: menuItems[i].name,short_name : menuItems[i].short_name,description : menuItems[i].description});
              }
          }
          return foundItems;
      }).catch(function(error){
          console.log(error);
      });
  };
};

})();
