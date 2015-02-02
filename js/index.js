$(function(){
	$.jset.fn.sessionSetup();
	$("#tabs").tabs();
	$("#tabs").height($('.ui-tabs-nav:first', $("#tabs")).height());

	panel = $($('#panel_template').html()).appendTo($('div#tabs-3'))
		.css({width:814, float:'right'})
		.addClass('rtl');
	$('span.panel-title', panel).html('קריאות');
	table = $('table[id="reading_master_table"]').appendTo($('div.panel-body', panel));
	
	set_panel_img_on_click_handler('div#tabs-3');

	$(window).bind('beforeunload', function(e){
		var message = 'נתונים השתנו! האם ברצונך לעזוב את הדף ללא שמירה?',
		stay = false,
		e = e || window.event,
		activeTab = $("#tabs").tabs( "option", "active");
	
		stay = fn_tamir.closeFromsInTab($('div[id="tabs"] ul .ui-tabs-active a'), activeTab);		
		if(stay){
			// For IE and Firefox
			if(e)
				e.returnValue = message;
			return message;			
		}
		
		$('div[id="tabs"] li a.ui-tabs-anchor').each(function(i){
			if(!stay)
				stay = fn_tamir.closeFromsInTab(this, i);
		});

		if(stay){
			if(e)
				e.returnValue = message;
			return message;			
		}
		
		$("#tabs").tabs( "option", "active", activeTab);
 	});
	
	//$("#tabs").width('98%');
	$("#tabs").bind("tabsshow", function(event, ui){
		var unit = $('table[id="unit"]');
		var accumulator = $('table[id="accumulator"]');
		var reading_register = $('table[id="reading_register"]');
		var summary = $('table[id="summary"]');
		var misc = $('table[id="misc"]');
		var report = $('table[id="report"]');
		//switch(ui.index)
		switch($(ui.panel).attr('id'))
		{
			case 'tabs-1':
				if(!unit.jset('defined'))
					unit.jset($.extend(true, {}, $.jset.defaults, $.jset.fn.getGridDefinition('unit')));
				else
					if(unit.data('pending_reload'))
						unit.jset('reload', [true]);
			break;

			case 'tabs-2':
				if(!accumulator.jset('defined'))
					accumulator.jset($.extend(true, {}, $.jset.defaults, $.jset.fn.getGridDefinition('accumulator')));
				else
					if(accumulator.data('pending_reload'))
						accumulator.jset('reload', [true]);
			break;

			case 'tabs-3':
				if(!reading_register.jset('defined'))
					reading_register.jset($.extend(true, {}, $.jset.defaults, $.jset.fn.getGridDefinition('reading_register')));
				else
					if(reading_register.data('pending_reload'))
						reading_register.jset('reload', [true]);
			break;

			case 'tabs-4':
				if(!summary.jset('defined'))
					summary.jset($.extend(true, {}, $.jset.defaults, $.jset.fn.getGridDefinition('summary')));
				else
					if(summary.data('pending_reload'))
						summary.jset('reload', [true]);
			break;

			case 'tabs-5':
				if(!misc.jset('defined'))
					misc.jset($.extend(true, {}, $.jset.defaults, $.jset.fn.getGridDefinition('misc')));
				else
					if(misc.data('pending_reload'))
						misc.jset('reload', [true]);
			break;

			case 'tabs-9':
				if(!report.jset('defined'))
					report.jset($.extend(true, {}, $.jset.defaults, $.jset.fn.getGridDefinition('report')));
			break;
			default:
		}
	});

	/*var currentTabId = $('div[id="tabs"] ul .ui-tabs-active a').attr("href");
	var tui = {};
	tui.panel = $('<div/>');
	tui.panel.attr('id', currentTabId.replace('#', ''));*/
	$("#tabs").trigger('tabsshow', [fn_tamir.currentTab()]);
});

var fn_tamir = {
	apply: function(formid){
		var grid = $(this);
		switch(user_attributes.group){
			case '3':
			case '4':
				$.jset.fn.readonlySet(grid, formid, $($.jset.fn.get_form_field(formid, 'creator')).val() != user_attributes.id);
				break;
			default:
				;
		}
	},
	
	currentTab: function(){
		var currentTabId = $('div[id="tabs"] ul .ui-tabs-active a').attr("href");
		var tui = {};
		tui.panel = $('<div/>');
		tui.panel.attr('id', currentTabId.replace('#', ''));
		return tui;
	},
	
	getTab: function(aelement){
		var tabId = $(aelement).attr("href");
		var tui = {};
		tui.panel = $('<div/>');
		tui.panel.attr('id', tabId.replace('#', ''));
		return tui;
	},
	
	closeFromsInTab: function(a, i){
		var stay = false;
		var div_id = $(a).attr('href').replace('#', '');
		var currentDiv = $('div[id="' + div_id + '"]');
		var exclude = $("div.ui-jqgrid[id^='gbox_'] div.ui-jqgrid[id^='gbox_']", currentDiv);
		if(currentDiv.find('div[id^="gbox_"]').not(exclude).length > 0){
			$("#tabs").tabs( "option", "active", i );
			currentDiv.find('div[id^="gbox_"]').not(exclude).each(function(){
				var form = $.jset.fn.closeForm($.jset.fn.get_grid_from_container($(this)));
				if(form.is(':visible'))
					stay = true;				
			});
		}
		return stay;
	}
};
