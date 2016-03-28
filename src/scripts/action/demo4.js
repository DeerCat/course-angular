var fnUtil = require('../util/fn-util.js');
var demo4Tpl = require('../tpl/demo4.string');

fnUtil.render({
	str: demo4Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('UserController', function( $scope ){
	$scope.email = "";
});