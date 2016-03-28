var fnUtil = {
	render: function(opt){
		var obj = opt.obj || document.getElementById('container');
		obj.innerHTML = opt.str || '';
	}
};

module.exports = fnUtil;

