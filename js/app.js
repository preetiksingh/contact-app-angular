var contactApp = angular.module('contact-app', ['ui.router']);

contactApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    
    .state('home', {
      url: "/",
      templateUrl: "view/home.tmpl.html",
      controller: 'homeCtrl'
      
    })
    .state('addContact', {
      url: "/add-contact",
      templateUrl: "view/addContact.tmpl.html",
      controller: 'addContactCtrl'
      
    })
});


contactApp.controller('homeCtrl', function($scope, contactService) {
	$scope.showEditForm = false;
	$scope.contacts = contactService.contacts;
    $scope.removeContact = function(index){
		$scope.contacts.splice(index, 1 );
    }

    // $scope.editContact = function(index){
    // 	$scope.showEditForm = true;
    // 	var existingContact = $scope.contacts[index];
    // 	$scope.existingName = existingContact.name;
    // 	$scope.existingphone =existingContact.phone;

    // }
});


contactApp.controller('addContactCtrl', function($scope, contactService){
	contactService.contacts = [];
	 $scope.addContact = function(){

    	var contactObject = {
    		name:$scope.name,
    		phone: $scope.phone
    	}
    	$scope.name = " ";
    	$scope.phone = " ";

    	contactService.contacts.push(contactObject);
    }

});

contactApp.service('contactService', function(){
	var contactService = this;
	contactService.contacts = [];

});



