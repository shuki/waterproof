$(function(){
	$.jset.fn.registerGridDefinition('unit', {
	  	source: 'unit',
	  	item_name: 'יחידה',
		searchall: true,
		template: {
			use: true,
			columns: 1
		},
		afterSubmit: function(response, postdata){
			$('table.jset_table[id="accumulator"]').jset('pending_reload');
			$('table.jset_table[id="reading_register"]').jset('pending_reload');
			return [true];
		},
	    grid: {
		    sortname: 'name',
		    sortorder: 'asc'
	  	}
	});
});
