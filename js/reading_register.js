//$(function(){
/*	$.jset.fn.registerGridDefinition('reading_register', {
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
		},*/
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
/*	    grid: {
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
*/

$(function(){
	var reading_settings = {
		source: 'reading',
		item_name: 'קריאה',
		persist: false,
		template: {
			use: true,
			columns: 1
		},
		filter:[{
			source: 'id',
			target: 'parent'
		}],
		'import':{
			navButtonAdd: false,
		},
		copy:{
			navButtonAdd: false
		},
		help:{
			hide: false,
			navButtonAdd: false
		},
		filterToolbar:{
			hide: false,
			navButtonAdd: false
		},
		columnChooser:{
			navButtonAdd: true
		},
		onInitializeForm: function(formid){
		},
		beforeShowForm: function(formid){
		},
		afterShowForm: function(formid){
		},
		afterclickPgButtons : function(whichbutton, formid, rowid, id){
		},
		loadCompleteInit: function(data){
		},
		beforeSubmit: function(postdata, formid){
			return [true];
		},
		beforeRequest: function(){
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר קריאה ליחידה ליום זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
	    grid: {
		    height: $(window).height() - 362,
    		width: 600,
    		//autowidth: true,
	        //sortname: 'patient_fullname',
	        //sortorder: 'asc'
	  	},
	  	navigation:{
			options : {
				add: true,
				edit: true,
				del: true,
				search: false,
				view: false,
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
	};

	$.jset.fn.registerGridDefinition('reading_register', {
	  	source: 'reading_register', 
  		item_name: 'דוח קריאות',
		load_edit_record: false,
		template:{
			use: true,
			columns: 1
		},
		detail: [{
			elem: '#reading_item',
			settings: reading_settings
		}],
		persist: false,
		copy:{
			navButtonAdd: false
		},
		'import':{
			navButtonAdd: false,
		},
		help:{
			hide: false,
			navButtonAdd: true
		},
		filterToolbar:{
			hide: false,
			navButtonAdd: false
		},
		columnChooser:{
			navButtonAdd: true
		},
		loadComplete: function(data){
		},
		onInitializeForm: function(formid){			
		},
		beforeShowForm: function(formid){
		},
		loadCompleteInit: function(data){
		},
		beforeSubmit: function(postdata, formid){
			return [true];
		},
		afterSubmit: function(response, postdata, frmoper, obj){
			var grid = $(this);
			if(grid.data('form_action') == 'edit')
				$('table#reading')[0].triggerToolbar();

			return [true];
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר דוח נוכחות ליום זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
		beforeRequest: function(){
		},
	    grid: {
	    	height: 100,
    		width: 600,
    		//autowidth: true,
	        sortname: 'date',
	        sortorder: 'desc'
	  	},
	  	navigation:{
			options : {
				search: false,
				view: false,
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

var fn_reading_register= {
};