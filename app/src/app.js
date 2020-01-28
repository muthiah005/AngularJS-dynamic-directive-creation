
var app = angular.module('app',['app.dataServices','app.testController']);

app.run(['$rootScope','$location',function($rootScope, $location) {
	console.log('Run');
}]);

