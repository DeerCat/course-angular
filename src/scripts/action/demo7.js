var fnUtil = require('../util/fn-util.js');
var demo7Tpl = require('../tpl/demo7.string');

fnUtil.render({
	str: demo7Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('UserController', function( $scope, $log, $timeout ){
	$scope.timer = null;
	$scope.gameOn = function(){
		$log.log('用户登录');
		$scope.timer = $timeout( $scope.gameOver, 3000 );
	};

	$scope.gameOver = function(){
		$log.info('游戏结束');
		$timeout.cancel($scope.timer);
	};
});