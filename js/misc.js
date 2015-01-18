$(function(){
	$.jset.fn.registerGridDefinition('misc', {
	  	source: 'misc', 
	  	item_name: 'תעריף',
		template: {
			use: true,
			columns: 1
		},
		copy:{
			navButtonAdd: false
		},
		help:{
			hide: false,
			navButtonAdd: true,
		},
	
		filterToolbar:{
			hide: false,
			navButtonAdd: false,
		},
		columnChooser:{
			navButtonAdd: false
		},
		onInitializeForm: function(formid){
			$.jset.fn.get_form_field(formid, 'date_effective').datepicker('option', 'beforeShowDay',
				function (date) {
					return date.getDate() == 1 ? [true, ''] : [false, ''];
			    }
			);
		},
	    grid: {
		    //sortname: 'name',
		    //sortorder: 'desc',
		    height: $(window).height() - 150,
		    width: 500
	  	},
	  	navigation:{
			options : {
				add: true,
				search: false,
				view: false,
				del: true
			}
		}
	});
});
