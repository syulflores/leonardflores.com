/* Navbar Transparent to Solid */

$(document).ready(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('.navbar').addClass('solid');
			$('.navbar-brand').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
			$('.navbar-brand').removeClass('solid');
		}
	});
});

/* Close Mobile Nav OnClick */

$(document).ready(function() {
	$(document).click(function(event) {
		var clickover = $(event.target);
		var isOpened = $(".navbar-collapse").hasClass("show");
		if (isOpened === true && !clickover.hasClass("navbar-toggler")) {
			$(".navbar-toggler").click();
		}
	});
});

/* Smooth Scrolling to Links */

$(document).ready(function() {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate( {
				scrollTop: $(hash).offset().top
			}, 800, function() {
				window.location.hash = hash;
			});
		}
	});
});

/* Bouncing Down Arrow */

$(document).ready(function() {
	$(window).scroll(function() {
		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
	});
});

/* Loading Animation */

/*
$(window).on("load", function(){
	$(".loading-animation").fadeOut("slow");
});
*/