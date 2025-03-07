(function () {
'use strict';
/*
module function call returns module so you can call controller on it. $scope is used for sharing
data between view and viewmodel
*/
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyControllerCB)
.controller('AlreadyBoughtController', AlreadyBoughtControllerCB)
.service('ShoppingListCheckOffService', ShoppingListCheckOffServiceCB)

ToBuyControllerCB.$inject=['ShoppingListCheckOffService'];
function ToBuyControllerCB(ShoppingListCheckOffService) {
  var buyList = this; 
  buyList.items = ShoppingListCheckOffService.getBuyListItems();
  buyList.transferItem = function(itemIndex){
    ShoppingListCheckOffService.transferFromBuyToBought(itemIndex);
  }
};

AlreadyBoughtControllerCB.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtControllerCB(ShoppingListCheckOffService){
  var bghtList=this;
  bghtList.items = ShoppingListCheckOffService.getBghtListItems();

};

function ShoppingListCheckOffServiceCB(){
  var service=this;
  var toBuyList=[
    { name: "cookies", quantity: 10 },
    { name: "jam", quantity: 1 },
    { name: "butter", quantity: 2 },
    { name: "oatPacket", quantity: 1 },
    { name: "sugarPacket", quantity: 1 },
    { name: "raisinPacket", quantity: 2}
  ];
  var alreadyBoughtList=[];

  service.getBghtListItems = function() { 
    return alreadyBoughtList;
  };
  service.getBuyListItems = function() { 
    console.log("Numer of items in buy list are ",toBuyList.length );
    return toBuyList;
  };
  
  service.transferFromBuyToBought = function(itemIndex){
    var item = toBuyList[itemIndex];
    toBuyList.splice(itemIndex,1);
    alreadyBoughtList.push(item);
  };
}
})();
