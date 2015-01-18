$(function(){
	$.jset.fn.registerGridDefinition('unit', {
	  	source: 'unit',
	  	item_name: 'יחידה',
		searchall: true,
		template: {
			use: true,
			columns: 1
		},
	    grid: {
		    sortname: 'name',
		    sortorder: 'asc'
	  	}
	});
});
