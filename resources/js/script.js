$(document).ready(function(){

	// for stick navigation appearing on 2nd child and up sections
	$('.js--section-features').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky');
		}
		else {
			$('nav').removeClass('sticky');
		}
	},
	{
		offset: '60px;'
	});

	//cta and btn scrolls
	$('.js--scroll-to-plans').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
		// on button click, there will be an animation that scrolls to section plans in 1 second
	});
	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
		// on button click, there will be an animation that scrolls to section plans in 1 second
	});

	// scroll-spy
	$(function() {
	  	$('a[href*="#"]:not([href="#"])').click(function() {
	  		//selects link element that starts with a # symbol
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      //if locations exists, starts with / 
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
});
});