$(function(){
	$.extend($.validator.messages, {
	  required: 'שדה חובה',
	  email: 'איימל לא תקין'
	});
		
	$.extend(true, $.jset.defaults, {
		editor:{
			directionality : 'rtl',
			language : 'he_IL',
			menubar : false,
			//toolbar: 'fontselect fontsizeselect bold italic underline forecolor backcolor alignleft aligncenter alignright bullist numlist outdent indent blockquote removeformat',
			toolbar: 'fontsizeselect bold italic underline forecolor backcolor alignleft aligncenter alignright bullist numlist outdent indent blockquote removeformat',
			plugins : 'textcolor'


		},
		control:{
			align: 'right',
			checkbox: {
				searchoptions:{
					value: {0:'לא', 1:'כן'},
				}
			},
			datepicker: {
				region: 'he'
			},
			selectbox:{
				align: 'right'
			},
			selectbox_plus:{
				align: 'right',
				editoptions: {
					settings:{
						search_default:[{name:'id', value:''}],
						single_record: {
							active: true,
							displayAlert: false,
							mode: '',
							options:{
								closeOnEscape: false,
								closeAfterEdit: false,
								closeAfterAdd: false,
								drag: false,
								resize: false,
								viewPagerButtons: false,
								editCaption: 'ערוך',
								addCaption: 'הוסף'
							}
						}
					}
				}
			},
			text:{
				align:'right'
			},
			textarea:{
				align:'right'
			},
			varchar:{
				align:'right'
			},
			editor:{
				align:'right',
				editoptions:{
					directionality : 'rtl'
				}
			},
			upload_file:{
				align:'right',
				formatoptions:{
					picture_lable: 'תמונה',
					file_lable: 'קובץ'
				},
				editoptions:{
					custom_options:{
						row_height: '80',
						max_width: '200',
						browse_title: 'העלה קובץ',
						delete_title: 'הסר קובץ',
						show_image: false,
						show_target: false,
						show_link: true
					}
				},
				formoptions:{
					label_hide: false
				}
			}
		},
		persist: false,
		clearPersist: {
			navButtonAdd: false
		},
		clearFilterToolbar:{
			navButtonAdd: true,
			options: {
				caption: '',
				title: 'נקה שדות סינון',
				buttonicon: 'ui-icon-cancel',
				position: 'last'
			}
		},
		'export':{
			navButtonAdd: true,
			options: {
				caption: '',
				title: 'ייצא לאקסל',
				buttonicon: 'ui-icon-star',
				position: 'last'
			},
			associative:'both'
		},
		help:{
			hide: false,
			navButtonAdd: false,
			dialog: {
				title: 'הסבר'
			}
		},
	    grid: {
	    	direction: 'rtl',
		    width: $(window).width() - 24,
		    height: $(window).height() - 115,
			rownumWidth: 30
	  	}
	});
});

