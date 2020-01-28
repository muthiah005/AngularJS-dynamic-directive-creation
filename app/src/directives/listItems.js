
app.directive('listItems', function($rootScope, $compile) {
	return {
    template:'<button ng-click="addItem()" class="btn btn-primary custom_btn">Add Directive</button> <div class="row" id="holder"></div>',
  	controller: function($element, $scope) {
	      $scope.addItem = function() {
	      	var element = $("#holder");
	        var elStr = "<item></item>";
	        var newScope = $rootScope.$new();
	        var insertedEl = $compile(elStr)(newScope);
	      	element.append(insertedEl);
	      };
   	},
   	link:function(){
   		console.debug("holder");
   	}
  }
});

app.directive("item", function() {
	return {
	template:`<div class='box_item'>
					<form name="loginForm" ng-submit="submitForm(loginForm.$valid)" novalidate>
					  <div class="form-group">
					    <label for="email">Email address</label>
					    <input type="email" class="custom_txt form-control" 
					    id="email" aria-describedby="emailHelp" 
					    placeholder="Enter email"
					    ng-model="loginForm.email" required>
					  </div>

					  <div class="form-group">
					    <label for="password">Password</label>
					    <input type="password" 
					    class="custom_txt form-control"
					    id="password" placeholder="Password"
					    ng-model="loginForm.password" required>
					  </div>
					  <button type="submit" ng-disabled="loginForm.$invalid" class="custom_btn btn btn-primary">Submit</button>
					</form>
			  </div>`,
    controllerAs: "testController",
  	controller: function($element,$scope) {
    	$scope.text = "Directive";

    	$scope.loginForm = {};

    	  $scope.submitForm = function(isValid) {
		    if (isValid) {
		      console.debug($scope.loginForm.email,$scope.loginForm.password);
		    }
		  };


    	$scope.removeDirective = function(e) {
		  //remove element and also destroy the scope that element
		  $element.remove();
		  $scope.$destroy();
		}

    },
    link:function(){
    	console.debug("item")
   	}
  }
});