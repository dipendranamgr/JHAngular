// (function(){
// 	'use strict';

// 	angular.module('LunchCheck',[])
// 	.controller('LunchCheckController',LunchCheckController);

// 	LunchCheckController.$inject = ['$scope'];

// 	$scope.LunchCheckController = function($scope){
// 			var count = 0;

// 		$scope.check = function(){
// 			console.log("check");
// 			count = calculateCount($scope.items);
// 			if(count <=3 && count > 0)
// 				$scope.message = "Enjoy!";
// 			else if (count > 3)
// 				$scope.message = "Too much!";
// 			else if (count = 0)
// 				$scope.message = "Please enter data first";
// 		};

// 		$scope.calculateCount = function(string){
// 			var counter = 0;
// 			if(string == "")
// 				return counter;
// 			for(var i = 0;i < string.length; i++){
// 				if(string.charAt(i) == ",")
// 					counter++;
// 			}
// 			counter++;

// 			return counter;
// 		};
// 	};
// })();

(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
		function LunchCheckController($scope){
		var count = 0;

		$scope.check = function(){
			
			count = calculateCount($scope.items);
			if(count <=3 && count > 0)
				$scope.message = "Enjoy!";
			else if (count > 3)
				$scope.message = "Too much!";
			else if (count == 0)
				$scope.message = "Please enter data first";
		};

		function calculateCount(string){
			var counter = 0;

			if(string == "")
				return counter;
			else{
				for(var i = 0;i < string.length; i++){
					if(string.charAt(i) == ",")
						counter++;
				}
			}
			counter++;

			return counter;
		};
		

	};
})();