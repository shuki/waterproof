$(function(){
	$.jset.fn.registerGridDefinition('accumulator', {
	  	source: 'accumulator',
	  	item_name: 'מונה',
		searchall: true,
		reopen_after_add: true,
		template: {
			use: true,
			columns: 1
		},
	    grid: {
    		width: 700,
		    sortname: 'accumulator_number',
		    sortorder: 'asc'
	  	}
	});
});
