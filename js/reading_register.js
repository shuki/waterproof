$(function(){
	var reading_settings = {
		source: 'reading',
		item_name: 'קריאה',
		row_selection: false,
		autoRowNum: false,
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
			var grid = $(this);
		},	   
		beforeEditCell: function(rowid, celname, value, iRow, iCol){
			var grid = $(this);
			current_row = grid.jqGrid("getRowData", rowid);
		},	   
		afterSaveCell: function (rowid, cellname, value){
			var grid = $(this);
			var last_amount = grid.jqGrid("getCell", rowid, 'last_amount') ? parseFloat(grid.jqGrid("getCell", rowid, 'last_amount')) : 0;
			var final_amount = grid.jqGrid("getCell", rowid, 'final_amount') ? parseFloat(grid.jqGrid("getCell", rowid, 'final_amount')) : 0;
			var initial_amount = grid.jqGrid("getCell", rowid, 'initial_amount') ? parseFloat(grid.jqGrid("getCell", rowid, 'initial_amount')) : 0;

			if(current_row.id == rowid){			
				if (cellname === 'amount'){
			    	var amount = value;
			    	var adjustment = current_row.adjustment ? parseFloat(current_row.adjustment) : 0;
			    }
			    if (cellname === 'adjustment'){
			    	var adjustment = value;
			    	var amount = current_row.amount ? parseFloat(current_row.amount) : 0;
			    }
			}
			else
			{
				if (cellname === 'amount'){
			    	var amount = value;
			    	var adjustment = grid.jqGrid("getCell", rowid, 'adjustment') ? parseFloat(grid.jqGrid("getCell", rowid, 'adjustment')) : 0;
			    }
			    if (cellname === 'adjustment'){
			    	var adjustment = value;
			    	var amount = grid.jqGrid("getCell", rowid, 'amount') ? parseFloat(grid.jqGrid("getCell", rowid, 'amount')) : 0;
			    }
			}

		    if(final_amount > 0)
		    	grid.jqGrid("setCell", rowid, 'usage', amount - initial_amount + final_amount - last_amount - adjustment);
		    else
		    	grid.jqGrid("setCell", rowid, 'usage', amount - last_amount - adjustment);

			current_row = grid.jqGrid("getRowData", rowid);		    
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
		    height: $(window).height() - 378,
    		width: 800,
			cellEdit: true,
	        sortname: 'units',
	        sortorder: 'asc'
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
    		width: 800,
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
	
	var current_row;
});