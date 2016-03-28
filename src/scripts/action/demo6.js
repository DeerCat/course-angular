var fnUtil = require('../util/fn-util.js');
var demo6Tpl = require('../tpl/demo6.string');

fnUtil.render({
	str: demo6Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('UserController', function( $scope, $log ){
	$log.log('用户登录');
	$log.warn('用户尝试登录次数过多！');
	$log.info('用户登录中...');
	$log.error('登录失败');
	$log.debug('用户登录中...');
});