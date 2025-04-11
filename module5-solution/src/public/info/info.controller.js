(function(){

angular.module('public')
.controller('InfoController',InfoController);


InfoController.$inject = ['info'];
function InfoController(info){
	var infoCtrl = this;
	infoCtrl.Person = info;
	if(infoCtrl.Person)
	console.log(" saved person is ", infoCtrl.Person.firstName, infoCtrl.Person.lastName, infoCtrl.Person.emailAddress, 
		infoCtrl.Person.phoneNumber, infoCtrl.Person.menuNumber, infoCtrl.Person.image, 
		infoCtrl.Person.imageName,infoCtrl.Person.imageShortName);
}


})();