(function () {
'use strict';
/*
module function call returns module so you can call controller on it. $scope is used for sharing
data between view and viewmodel
*/
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchControllerCallback);
LunchControllerCallback.$inject=['$scope'];

function LunchControllerCallback($scope) {
  $scope.list="";
  $scope.display="";
  $scope.checkTooMuch = function () {
    if(!$scope.list){
      $scope.display="Please enter data first";
      $scope.col="red";
      $scope.bordercol="3px solid #F7730E"
      return;
    }      
    const items = $scope.list.split(",");
    var len = items.length;
    for(var count in items){
      var item = items[count].trim();
      if(!item)
        len-=1;
    }
    if(len <=3)
      $scope.display="Enjoy!";
    else
      $scope.display="Too much";
    $scope.col="green";
    $scope.bordercol="3px solid #F7730E"
  };
};

})();
