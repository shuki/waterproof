$(function(){
	$.jset.fn.registerGridDefinition('accumulator', {
	  	source: 'accumulator',
	  	item_name: 'מונה',
		searchall: true,
		template: {
			use: true,
			columns: 1
		},
	    grid: {
    		width: 500,
		    sortname: 'accumulator_number',
		    sortorder: 'asc'
	  	}
	});
});
