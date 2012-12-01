(function($) {
	$.fn.ScrollAndFix=function() {
		return this.each(function() {
			var $this=$(this);
			var fixHeight=$(this).position().top;
			console.log(fixHeight);
			setInterval(function() {
				//use $this inside here, restore original position and height css parameters

				var scrollHeight=$(document).scrollTop();
				if(Math.abs(fixHeight-scrollHeight)<50) {
					$("#scrolldiv").css({'position': 'fixed', 'top': '0px'});
				}
				else {
					if(scrollHeight<fixHeight) {
						$("#scrolldiv").css('position', 'relative');
					}
				}
			}, 100);
		});
	};
})(jQuery);

$(document).ready(function () {
	$("#scrolldiv").ScrollAndFix();
});