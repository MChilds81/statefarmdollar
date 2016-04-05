$(document).ready(function() {
	$(".dollar").mouseenter(function() {
		// $(".dollar").hide();
		var p = $(".dollar");
		var position = p.position();
		// $( "body" ).html( "left: " + position.left + ", top: " + position.top );
		if (position.top == "150") {
			$(".dollar").animate({top: "100px"},100);
		} 
		else {
			$(".dollar").animate({top: "150px"},100);
		}
		var comment = $(".comment");
		$(comment).show();
		$(comment).fadeOut(2000);
	});
});