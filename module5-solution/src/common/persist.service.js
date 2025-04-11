(function () {
"use strict";

angular.module('common')
.service('PersistService', PersistService);


function PersistService() {
  var service = this;
  service.Person=null;
  service.save = function (Person) {
    service.Person=Person;  
  };


  service.get = function () {
    return service.Person;
  };
}



})();
