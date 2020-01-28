var dataService = angular.module('app.dataServices', []);

dataService.service('dataService', function($rootScope) {

	var data = {};

	function setData(data)	{
		data = data; 
	}

	function getData(){

	}


	return{
		setData:function(data)	{ return setData(data) },
		getData:function()		{ return getData() }
	}
});