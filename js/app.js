$(document).ready(function(){

	$(".button-projects").click(function(event){
		// var goTop = 300;
		event.preventDefault();
		var goTop = $(".projects").offset().top;
		// console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop},1000, "easeInOutQuart")
	
});
	$(".button-home").click(function(event){
		// var goTop = 300;
		event.preventDefault();
		var goTop = $(".home").offset().top;
		// console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop},1000, "easeInOutQuart")
	
});

	$(".button-about").click(function(event){
		// var goTop = 300;
		event.preventDefault();
		var goTop = $(".about").offset().top;
		// console.log($(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop},1000, "easeInOutQuart")
	
});
	$(".button-contact").click(function(event){
		// var goTop = 300;
		event.preventDefault();
		var goTop = $(".contact").offset().top;
		// console.log(4(".projects").offset().top);
		$("html, body").animate({scrollTop:goTop},1000, "easeInOutQuart")
});

	window.sr = ScrollReveal();
	sr.reveal('.splash .header', { reset: true });
	sr.reveal('.content-holder', { duration:})
	sr.reveal('.splash .description', { reset: true, duration: 1000, delay: 250 });
	sr.reveal('.projects .header2', { reset: true, origin: "top"});
	sr.reveal('.projects .project-item', {reset: true, origin:"left"}, 50);

	
});
