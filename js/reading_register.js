$(function(){
	var reading_settings = {
		source: 'reading',
		item_name: 'קריאה',
		row_selection: false,
		persist: false,
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
		loadCompleteInit: function(data){
			var grid = $(this);
			if(grid.jqGrid('getGridParam', 'records') != 0)
				grid.jqGrid("editCell", 1, 7, false);
		},
		loadComplete: function(data){
		},
		onSelectCell: function(rowid, celname, value, iRow, iCol){
		},	   
		afterSaveCell: function (rowid, cellname, value){
			var grid = $(this);
		    if (cellname === 'amount') {
		        var last_amount = parseFloat(grid.jqGrid("getCell", rowid, 'last_amount'));
		        grid.jqGrid("setCell", rowid, 'usage', parseFloat(value) - parseFloat(last_amount));
		    }
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיימת כבר קריאה למונה לחודש זה.';
					break;
				default:
					;
			}
			return [false, message];
		},
	    grid: {
		    height: $(window).height() - 408,
    		width: 600,
			cellEdit: true,
	        sortname: 'units',
	        sortorder: 'desc'
	  	},
	  	navigation:{
			options : {
				add: false,
				edit: false,
				del: false,
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
		persist: false,
		template:{
			use: true,
			columns: 1
		},
		detail: [{
			elem: '#reading_item',
			settings: reading_settings
		}],
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
		onInitializeForm: function(formid){			
			$.jset.fn.append_fields(formid, 'year', 1);
			$('label.CaptionField[for="year"]', formid).html('לחודש: ');
			$('label.CaptionField[for="month"]', formid).html('/');
			$($.jset.fn.get_form_field(formid, 'date')).on('change', function(){
				var value = $(this).val();
				if(value){
					var parts = value.split('/');
					var month = parts[1].replace(/^0+/, '') == 1 ? 12 : parts[1].replace(/^0+/, '') - 1;
					$($.jset.fn.get_form_field(formid, 'month')).val(month);
					var year = month == 12 ? parts[2] - 1 : parts[2];
					$($.jset.fn.get_form_field(formid, 'year')).val(year);
				}
				else
				{
					$($.jset.fn.get_form_field(formid, 'month')).val('');
					$($.jset.fn.get_form_field(formid, 'year')).val('');
				}
			});
		},
		beforeShowForm: function(formid){
			var grid = $(this);
			if(grid.data('form_action') == 'add')
				$($.jset.fn.get_form_field(formid, 'date')).trigger('change');			
		},
		afterSubmit: function(response, postdata, frmoper, obj){
			var grid = $(this);
			if(grid.data('form_action') == 'edit')
				$('table#reading_item')[0].triggerToolbar();

			return [true];
		},
		afterSubmitError: function(response, postdata, frmoper, obj){
			var message = obj.error.message;
			switch(obj.error.info[1]){
				case 1062: 
					message = 'קיים כבר דוח קריאות לחודש זה.';
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