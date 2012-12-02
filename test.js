$(document).ready(function () {
	setInterval(function() {
		$("#stp").html($(document).scrollTop());
		$("#sht").html($("#scrolldiv").position().top);
	},100);
	$("#scrolldiv").ScrollAndFix();
});