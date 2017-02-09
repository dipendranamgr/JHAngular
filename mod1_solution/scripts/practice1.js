// (function(){
// 	'use strict';

// 	angular.module('myApp',[])
// 	.controller('myController',myController);

// 	myController.$inject = ['$scope'];

// 	function myController(){
// 		$scope.inputString = "ra";
// 		$scope.totalValue = 0;
// 	}
// })();

// var app = angular.module('myApp',[]);
// app.controller('myController',function($scope){
// 	$scope.inputString = "ram";
// 	$scope.totalValue = 0;
// });

(function(){
	'use strict';
	angular.module('myApp',[])
	.controller('myController',myController);

	myController.$inject = ['$scope'];
		function myController($scope){
		$scope.inputString = "";
		$scope.totalValue = 0;

		$scope.calculateNum = function(){
			var totVal = 0;
			for(var i = 0;i< $scope.inputString.length;i++){
				totVal += $scope.inputString.charCodeAt(i);
			}

			$scope.totalValue = totVal;
		};

	};
})();