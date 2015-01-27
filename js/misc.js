$(function(){
	$.jset.fn.registerGridDefinition('misc', {
	  	source: 'misc', 
	  	item_name: 'תעריף',
		template: {
			use: true,
			columns: 1
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
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר ערך למשתנה זה לתאריך זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
	    grid: {
		    sortname: 'date_effective',
		    sortorder: 'desc',
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
