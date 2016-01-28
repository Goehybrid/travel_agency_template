$(document).ready(function(){
	var jumbotronAnimation = "animated fadeIn";
	var jumbotronH2Animation = "animated lightSpeedIn";
	var jumbotronH3Animation = "animated fadeInDown";
	var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd onanimationend animationend';

	// animating jumbotron
	$("#jumbotron").addClass(jumbotronAnimation);
	
	// animating jumbotron text
	$("#jumbotron").find("h2").addClass(jumbotronH2Animation).one(animationend, function(){
		$("#jumbotron").find("h3").show().addClass(jumbotronH3Animation);
	});
	
	$("#navigation-button").on("click", function(){
		$("#navigation-bar").toggleClass("visible");
	})
});