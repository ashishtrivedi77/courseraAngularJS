(function(){

'use strict';
angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['$scope', 'allMenuItems', 'PersistService'];
function SignUpController($scope, allMenuItems, PersistService){
	var signUpCtrl = this;
	
	signUpCtrl.Person = null;
	signUpCtrl.errorMessage=="";
	signUpCtrl.successMessage=="";
	signUpCtrl.allMenuItems = allMenuItems;
	signUpCtrl.go = function(){
		for(const short_name in allMenuItems){
			for(const item of allMenuItems[short_name].menu_items){
				//console.log(" name is " , item.name );
				if( item.short_name == signUpCtrl.Person.menuNumber ){
					signUpCtrl.successMessage="Your information has been saved";
					signUpCtrl.errorMessage="";
					signUpCtrl.Person.image="images/menu/"+ short_name +"/"+item.short_name+".jpg";
					signUpCtrl.Person.imageName=item.name;
					signUpCtrl.Person.imageShortName=item.short_name;
					signUpCtrl.Person.description=item.description;
					PersistService.save(signUpCtrl.Person)
					return;
				}	
			}
		}
		signUpCtrl.errorMessage="No such menu number exists";
		signUpCtrl.successMessage="";
	}
}

}

)()