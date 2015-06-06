angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope,$location) {
	$scope.data = {};
    $scope.login = function() {  
      $location.path("/tab");
    }
    $scope.newuser= function() {  
        $location.path("/newuser");
      }
      
})
.controller('OrderCtrl', function($scope,$location) {
	$scope.payments  =  function() {
		$location.path("/tab/payment");
	}
}) 
.controller('PaymentCtrl', function($scope) {
	
	
}) 
.controller('PayPalCtrl', function($scope,$location,$state) {
	//PayPalCtrl
 $scope.payment = function() {
	 $state.go("tab.order");
 }
})
 .controller('HistoryCtrl', function($scope,$location,$state) {
		//PayPalCtrl
	 $scope.back = function() {
		 $state.go("tab.order");
	 }
})
.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
