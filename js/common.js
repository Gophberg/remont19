if ($(window).width() < 992) { //this for mobile
	function init() {
		var imgDefer = document.getElementsByTagName('img');
		for (var i=0; i<imgDefer.length; i++) {
			if(imgDefer[i].getAttribute('data-src')) {
				imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
			}
		}
	}
	window.onload = init;

	$(window).load(function() {
		$(window).resize(function() {
			var w = $(window).width();
			if(w > 992) {
				$("nav li a:focus").removeClass('text-decoration');
			}
		});
		$("#portfolio_grid").mixItUp();
		$(".s_portfolio li").click(function() {
			$(".s_portfolio li").removeClass("active");
			$(this).addClass("active");
		});
		$(".popup").magnificPopup( {
			type:"image"
		});
		$(".popup_content").magnificPopup( {
			type:"inline",
			midClick: true
		});
		$(".nav_menu ul a").mPageScroll2id();
		$(".main_text_1").css("display", "table");
		$(".main_text_2").css("display", "table");
		$(".main_text_3").css("display", "table");
		$(".main_link").css("display", "table");
		$(".portfolio_item").each(function(i) {
			$(this).find("a").attr("href", "#work_" + i);
			$(this).find(".podrt_descr").attr("id", "work_" + i);
		});
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$(".scrollup").fadeIn();
		}
	});
	$('.scrollup').click(function() {
		$("html, body").animate( {
			scrollTop: 0
		}, 700);
		return false;
	});
	$(document).ready(function() {
		var client_height;
		var client_width;
		client_height=document.documentElement.clientHeight;
		client_width=document.documentElement.clientWidth;
		$(".image_1").css("height", client_height+"px").css("width", client_width+"px");
		$("#renovation").css("height", client_height/2+"px").css("width", client_width+"px");
		$("#main_head").css("height", client_height+"px").css("width", client_width+"px");
		$("#about_us").css("width", client_width+"px");
		$("#services").css("width", client_width+"px");
		$(".shadow_in").css("width", client_width+"px");
		$(".shadow_out").css("width", client_width+"px");
		$("#portfolio").css("width", client_width+"px");
		$("#recalls").css("height", client_height+"px").css("width", client_width+"px");
		$("#contacts").css("width", client_width+"px");
		$("#footer").css("width", client_width+"px");
		$('.owl-carousel').owlCarousel({
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			loop: true,
			slideBy: 3,
			dots: true,
			dotsEach: false,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
			}
		});
	});
//further for desktop
} else {
	function init() {
		var imgDefer = document.getElementsByTagName('img');
		for (var i=0; i<imgDefer.length; i++) {
			if(imgDefer[i].getAttribute('data-src')) {
				imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
			}
		}
	}
	window.onload = init;

	$(window).load(function() {
		// $(".loader_inner").fadeOut();
		// $(".loader").delay(400).fadeOut("slow");
		$(window).resize(function() {
			var w = $(window).width();
			if(w > 992) {
				$("nav li a:hover").removeClass('text-decoration');
			}
		});
		$("#portfolio_grid").mixItUp();
		$(".s_portfolio li").click(function() {
			$(".s_portfolio li").removeClass("active");
			$(this).addClass("active");
		});
		$(".popup").magnificPopup( {
			type:"image"
		});
		$(".popup_content").magnificPopup( {
			type:"inline",
			midClick: true
		});
		$(".nav_menu ul a").mPageScroll2id();
		setTimeout(function () {
			$(".main_text_1").css("display", "table").addClass("animated zoomInDown");
		}, 500);
		setTimeout(function () {
			$(".main_text_2").css("display", "table").addClass("animated zoomInRight");
		}, 1000);
		setTimeout(function () {
			$(".main_text_3").css("display", "table").addClass("animated zoomInLeft");
		}, 1500);
		setTimeout(function () {
			$(".main_link").css("display", "table").addClass("animated fadeInUp");
		}, 2500);
		// setTimeout(function () { 
		// $(".header_image").css("transform", "scale(1.2)");
		// }, 0);
		$(".portfolio_item").each(function(i) {
			$(this).find("a").attr("href", "#work_" + i);
			$(this).find(".podrt_descr").attr("id", "work_" + i);
		});
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			$(".scrollup").fadeIn();
		} else {
			$(".scrollup").fadeOut();
		}
	});
	$('.scrollup').click(function() {
		$("html, body").animate( {
			scrollTop: 0
		}, 700);
		return false;
	});
	$(document).ready(function() {
		var client_height;
		var client_width;
		client_height=document.documentElement.clientHeight;
		client_width=document.documentElement.clientWidth;
		$(".image_1").css("height", client_height+"px").css("width", client_width+"px");
		$("#renovation").css("height", client_height+"px").css("width", client_width+"px");
		$("#main_head").css("height", client_height+"px").css("width", client_width+"px");
		$("#about_us").css("min-height", client_height+"px").css("width", client_width+"px");
		$("#services").css("width", client_width+"px");
		$(".shadow_in").css("width", client_width+"px");
		$(".shadow_out").css("width", client_width+"px");
		$("#portfolio").css("width", client_width+"px");
		$("#recalls").css("height", client_height+"px").css("width", client_width+"px");
		$("#contacts").css("min-height", client_height+"px").css("width", client_width+"px");
		$("#footer").css("width", client_width+"px");
		$(".about_us_foto_wrapper").animated("fadeIn", "fadeOut");
		$(".about_us_text_content_wrapper").animated("fadeIn", "fadeOut");
		$(".services_content_wrapper").animated("fadeIn", "fadeOut");
		// $(".recalls_unit_wrapper").animated("fadeIn", "fadeOut");
		// $(".contacts_image_wrapper").animated("fadeInLeft", "fadeOutLeft");
		// $(".contacts_text_content_wrapper").animated("fadeInRight", "fadeOutRight");

		setInterval(function () { 
		$(".contacts_text_content_1")
			.animate( {
				'letter-spacing':'3.5px'
			},4000)
			.animate( {
				'letter-spacing':'1px'
			},1000);
		}, 4000);

		$(".renovation_text_1").animated("fadeInRight", "fadeOut");
		$(".renovation_text_2").animated("fadeInLeft", "fadeOut");
		$(".s_descr").animated("fadeIn", "fadeOutDown");
		$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
			$("nav").addClass("sticky").css("transition", "all 0.5s ease").css("background-color", "rgba(92,53,102,0.6)");
		} else {
			$("nav").removeClass("sticky").css("background-color", "rgba(0,0,0,0.3)");
		}
		});
		$('.owl-carousel').owlCarousel( {
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			loop: true,
			slideBy: 3,
			dots: true,
			dotsEach: false,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
			}
		});
	});
}