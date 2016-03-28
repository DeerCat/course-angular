var fnUtil = require('../util/fn-util.js');
var demo2Tpl = require('../tpl/demo2.string');

fnUtil.render({
	str: demo2Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('ShowController', function( $scope ){
	$scope.shows = [
		{title: '权利的游戏', subscribe: true},
		{title: '真探', subscribe: false},
		{title: '黑吃黑', subscribe: true},
		{title: '大西洋帝国', subscribe: true},
		{title: '罗马', subscribe: false}
	];
});