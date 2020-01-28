
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
	return {// {{text}}
	template:`<div class='box_item'>
					<form>
					  <div class="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" class="custom_txt form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
					    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
					  </div>
					  <div class="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" class="custom_txt form-control" id="exampleInputPassword1" placeholder="Password">
					  </div>
					  <div class="form-group form-check">
					    <input type="checkbox" class="form-check-input" id="exampleCheck1">
					    <label class="form-check-label" for="exampleCheck1">Check me out</label>
					  </div>
					  <button type="submit" class="custom_btn btn btn-primary">Submit</button>
					</form>
			  </div>`,
    controllerAs: "testController",
  	controller: function($element,$scope) {
    	$scope.text = "Directive";
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