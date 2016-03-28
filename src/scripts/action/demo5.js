var fnUtil = require('../util/fn-util.js');
var demo5Tpl = require('../tpl/demo5.string');

fnUtil.render({
	str: demo5Tpl
});

var myApp = angular.module('myApp', []);

myApp.factory('User', function(){
	var user = {
		id: 1,
		name: 'lurongtao',
		email: 'lurongtao@126.com'
	};

	var _getUser = function() {
		return user;
	};

	var _saveUser = function() {
		user.name = 'licheng',
		user.email = 'licheng@126.com'
	};

	return {
		getUser: _getUser,
		saveUser: _saveUser
	}
});

myApp.controller('UserController', function( $scope, User ){
	$scope.user = User.getUser();
	$scope.submit = function() {
		User.saveUser();
	}
});

myApp.controller('ShowController', function( $scope, User ){
	$scope.user = User.getUser();
});