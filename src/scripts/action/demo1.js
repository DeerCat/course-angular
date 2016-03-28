var fnUtil = require('../util/fn-util.js');
var demo1Tpl = require('../tpl/demo1.string');

fnUtil.render({
	str: demo1Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('UserController', function( $scope ){
	$scope.user = {};
	$scope.user.name = "lurongtao1";
	$scope.user.email = "lurongtao@126.com";
	$scope.user.subscribe = function(){
		console.log($scope.user.name + '订阅的新闻已经发送到你的邮箱：' + $scope.user.email);
	};
});