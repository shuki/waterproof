$(function(){
	$.jset.fn.registerGridDefinition('reading_register', {
	  	source: 'reading_register',
	  	item_name: 'קריאה',
		load_edit_record: false,
		persist:false,
		template: {
			use: true,
			columns: 1
		},
		filterToolbar:{
			hide: false,
			navButtonAdd: false
		},
	/*	onInitializeForm: function(formid){
			$(formid).closest('.ui-jqdialog').offset({ top: -1});
			$.jset.fn.get_form_field(formid, 'clean_number').on('change', function(){
				var elem = $(this);
				elem.val(elem.val().replace(new RegExp('-', 'g'), '').replace(new RegExp(' ', 'g'), ''));
			});
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'מס\' רכב זה כבר קיים.';
					break;
				default:
					;
			}
			return [false, message];
		},*/
	    grid: {
	    	direction: 'rtl',
		    sortname: 'name',
		    sortorder: 'asc',
	    	autowidth: true,
	    	height: $(window).height() - 140
	    	
	  	},
	  	navigation:{
			options : {
				search: false,
				view: false
			},
			edit:{
			},
			add:{
			},
			del:{
			},
			search:{
			},
			view:{
			}
		}
	});
});
