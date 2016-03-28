var fnUtil = require('../util/fn-util.js');
var demo9Tpl = require('../tpl/demo9.string');

fnUtil.render({
	str: demo9Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('ShowController', function( $scope, $log, $http ){
	$scope.getShows = function() {
		$http.get('./data.json')
			.then(function(data){
				$scope.shows = data.data;
			}, function(error){
				$log.log(error.data);
			});
	};
});