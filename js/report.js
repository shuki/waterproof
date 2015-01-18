$(function(){
	$.jset.fn.registerGridDefinition('report', {
	  	source: 'report', 
		load_edit_record: false,
		persist:false,
		copy:{
			navButtonAdd: false,
		},
		help:{
			hide: false,
			navButtonAdd: true
		},
	    grid: {
	    	width:500,
			height: $(window).height() - 150,
	 	},
	  	navigation:{
			options : {
				add:false,
				edit: false,
				del: false,
				search: false,
				view: false,
			}
		}
	});
});
