(function($){

	// Defining our jQuery plugin

	$.fn.paulund_modal_box = function(prop){

		// Default parameters

		var options = $.extend({
			height : "80%",
			width : "80%",
			title:"JQuery Modal Box Demo",
			description: "Example of how to create a modal box.",
			top: "10%",
			left: "10%",
		},prop);
				
		return this.click(function(e){
			add_block_page();
			add_popup_box();
			add_styles();
			
			$('.paulund_modal_box').fadeIn();
		});
		
		 function add_styles(){			
			$('.paulund_modal_box').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height,
				'width': options.width,
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#f2f2f2', 
				'z-index':'50',
				'overflow':'scroll';
			});
			$('.paulund_modal_close').css({
				'position':'relative',
				'top':'-25px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(close.png) no-repeat',
			});
                        /*Block page overlay*/
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.paulund_block_page').css({
				'position':'absolute',
				'top':'0',
				'left':'0',
				'background-color':'rgba(0,0,0,0.6)',
				'height':pageHeight,
				'width':pageWidth,
				'z-index':'14'
			});
			$('.paulund_inner_modal_box').css({
				'background-color':'#fff',
				'text-align':'justify',
				'height':'90%',
				'width':(options.width - 50),
				'padding':'10px',
				'padding-right':'50px',
				'padding-left':'50px',
				'font-size':'12pt',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
			});
		}
		
		 function add_block_page(){
			var block_page = $('<div class="paulund_block_page"></div>');
						
			$(block_page).appendTo('body');
		}
		 		
		 function add_popup_box(){
			 var pop_up = $('<div class="paulund_modal_box"><a href="#" class="paulund_modal_close"></a><div class="paulund_inner_modal_box"><h2>' + options.title + '</h2><p>' + options.description + '</p></div></div>');
			 $(pop_up).appendTo('.paulund_block_page');
			 			 
			 $('.paulund_modal_close').click(function(){
				$(this).parent().fadeOut().remove();
				$('.paulund_block_page').fadeOut().remove();				 
			 });
		}

		return this;
	};
	
})(jQuery);