var fnUtil = require('../util/fn-util.js');
var demo3Tpl = require('../tpl/demo3.string');

fnUtil.render({
	str: demo3Tpl
});

var myApp = angular.module('myApp', []);

myApp.controller('ShowController', function( $scope ){
	$scope.limit = 5;
	$scope.query = '';
	$scope.shows = [
		{
		    title: '权利的游戏',
		    subscribe: true,
		    rate: 9.9,
		    updated: 1458691234,
		    description: '《权力的游戏》是电视史上第一部奇幻题材电视剧，主要讲述维斯特洛大陆的七个贵族家族争夺铁王座的权力斗争。这部美剧黄金时代的巅峰之作，在全球坐拥近12亿粉丝，每季耗资近10亿打造，堪称当今的“世界剧王”，尚未完结却早已被戴上史诗神剧冠冕，该剧以全景式史书的恢弘壮阔和命运沉浮中的复杂人性征服了全世界观众，无数人为之魂牵梦绕。'
		},
		{
		    title: '真探',
		    subscribe: false,
		    rate: 9.6,
		    updated: 1458777656,
		    description: '美版《反击》故事根据英国同名短剧改编，描述一名美国特种兵和一名英国特种兵联手对抗恐怖组织并为战友复仇的故事。该剧是一部香艳、肌肉男、荷尔蒙激素过剩分泌的重口味的动作剧。'
		},
		{
		    title: '黑吃黑',
		    subscribe: true,
		    rate: 8.9,
		    updated: 1458864234,
		    description: 'HBO最新力作，由奥斯卡影帝马修•麦康纳和实力男星伍迪•哈里森出演。剧中他们一起调查一桩17年前的悬案，寻找涉及该案的路易斯安那连环杀手。这桩发生于1995年的案件当年因为伪证而遭误判，致使涉案的两位警探哈里森与麦康纳多年来内心不安。直到2012年该案被重新审查才发现当年漏洞……本剧一经播出即被众多剧迷奉为神作，横扫当年艾美奖提名，并最终获得2个奖项。最近国内大热剧《北平无战事》片头对《真探》也有所借鉴哦。'
		},
		{
		    title: '大西洋帝国',
		    subscribe: true,
		    rate: 8.8,
		    updated: 1458950499,
		    description: '该剧由创作过《黑道家族》并因此获得艾美奖的著名编剧打造，同样获得过艾美奖的导演Martin Scorsese执导首集。该剧根据作家Nelson Johnson的同名畅销小说改编，故事设定在上世纪20年代的大西洋城，联邦政府颁布禁酒令（1920-1933年）后，公开售卖酒类商品成为一种违法行为。在这种背景下，各种黑帮组织为争夺黑市控制权展开了你死我活的斗争。'
		},
		{
		    title: '罗马',
		    subscribe: false,
		    rate: 9.6,
		    updated: 1459036887,
		    description: '新世纪史诗级历史巨制 恢弘再现古罗马传奇！单季烧掉一亿美元制作成本，史上最贵美剧之一的《罗马》被誉为不可超越的历史剧，它淋漓尽致的展现了古罗马的变迁，不仅在全球刮起了收视旋风，更全面开启了美剧的大片时代，成为了后来者竞相模仿的对象。'
		}
	];

	$scope.comparator = function(actual, expected){
		return actual > expected;
	};
});