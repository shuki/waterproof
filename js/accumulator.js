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
		onInitializeForm: function(formid){
			/*$.jset.fn.get_form_field(formid, 'start_date').datepicker('option', 'beforeShowDay',
				function (date) {
					return date.getDate() == 1 ? [true, ''] : [false, ''];
			    }
			);
			$.jset.fn.get_form_field(formid, 'end_date').datepicker('option', 'beforeShowDay',
				function (date) {
					return date.getDate() == 1 ? [true, ''] : [false, ''];
			    }
			);*/
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר מונה עם מספר זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
	    grid: {
    		width: 700,
		    sortname: 'accumulator_number',
		    sortorder: 'asc'
	  	}
	});
});
