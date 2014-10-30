	//a global variable to the angular module we are using  
	var app = angular.module("msInterview",[]);

	var validate = function() { 
		
		var validator = function() {
			this.validate = function(cl,input) {
				switch(cl){
					case "letters":
						return /^[a-zA-Z]+$/.test(lastName); 
					case "pass":    
						return /^.{6,}$/.test(password);				
					default:
						break;
				}
			};
		};  
		
		var val = new validator();
		var link = function(scope, elm, attrs, ctrl) {
			function doValidation () {
				if (!(val.validate(attrs["class"],elm.val()))) {
					console.log("no es valido " +elm.val());
				}
			}    
			scope.$on("validate",doValidation);  
		};	
			
		var model ={
			restrict: 'A',
			require :"ngModel",
			link : link,
		}; 
		return model;
	};
	/*
		the app controller of the app, it contain the validate function that will be triggeres when the user clicks the submit button 
	 */
	function controller ($scope) {	
		$scope.user={};
		$scope.validate = function() { 
			$scope.$broadcast("validate");
		}   
	}     
	
	//pass the function of controller to the angular controller app and the userValidatorFactory to the angular factory to be used in the controller 
	app.controller("formValidator",controller);   
	app.directive("validate",validate);
	
