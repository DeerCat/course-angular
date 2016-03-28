var fnUtil = require('../util/fn-util.js');
var demo10Tpl = require('../tpl/demo10.string');

fnUtil.render({
	str: demo10Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('ShowController', ['$log', function($log){
	$log.log('abc');
}]);