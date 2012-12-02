(function($) {
	$.fn.ScrollAndFix=function() {
		return this.each(function() {
			var that=$(this);
			var fixHeight=$(this).position().top;
			$(document).scroll(function() {
				//have to use original width css parameters

				var scrollHeight=$(document).scrollTop();
				if(scrollHeight>=fixHeight) {
					that.css({'position': 'fixed', 'top': '0px'});
				}
				else {
					that.css('position', 'relative');
				}
			});
		});
	};
})(jQuery);