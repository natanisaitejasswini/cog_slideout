var app = angular.module('myApp', []);

  app.controller('MainCtrl', function($scope) {

  $scope.cards = [];

  $scope.users = [];
        

  $scope.addNewCard = function() {
    var newItemNo = $scope.cards.length+1;
    $scope.cards.push({'id':'choice'+newItemNo});
  };
  
  $scope.addUser = function(){
    $scope.users.push(this.newUser);
    if(!this.newUser || JSON.stringify(this.newUser) === '{}'){
      console.log("Fill the contact card")
    }
    else{
      console.log(this.newUser)
    }
    this.newUser = {};
    $scope.removeCard();
  }

  $scope.removeCard = function() {
    var lastItem = $scope.cards.length-1;
    $scope.cards.splice(lastItem);
  };

});


//Click Open contact slideout button to dynamically display Contact cards.
//Click "X" || "Send" to close contact card and then view form data in console.