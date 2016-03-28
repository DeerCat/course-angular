var fnUtil = require('../util/fn-util.js');
var demo8Tpl = require('../tpl/demo8.string');

fnUtil.render({
	str: demo8Tpl
});

var myApp = angular.module('myApp', []);

myApp.factory('GithubService', function( $q, $log, $timeout ){
	var _login = function() {
		var defer = $q.defer();

		// $log.log(defer);

		var data = {
			status: 'ok',
			userName: 'lurongtao'
		};

		if(data.status === 'ok'){
			$timeout(function(){
				defer.resolve(data);
			}, 3000);
		} else {
			defer.reject('用户不允许使用 Github 账户！');
		}

		defer.promise
			.then(
				function(data){
					$log.info( 'Hello ' + data.userName );
				},
				function(error){
					$log.warn(error);
				}
			);
			
		$log.info('abc');
	};

	return {
		login: _login
	}
});

myApp.controller('UserController', function( $scope, $log, GithubService ){
	GithubService.login();
});