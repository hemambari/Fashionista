/*
Title: Main JS File
Theme Name: Wedding
Author Name: FairyTheme
Author URI: http://themeforest.net/user/fairytheme
====================*/
/*
Table of Contents:
------------------
1. Windows on Load
2. Windows on Scroll
3. SVG loader
4. Navbar collapse
5. Circle type
6. Slick slider
7. Countdown
8. Form
9. Page scroll
10. Parallax
*/

(function () {
	'use strict';
	/* 1. Windows on Load
	====================*/
	$(window).on('load', function() {
		$('.loader').delay(2500).fadeOut('slow');
		var $grid = $('.grid').masonry({
			itemSelector: '.grid-item',
			percentPosition: true,
			columnWidth: '.grid-sizer'
		});
	});

	/* 2. Windows on Scroll
	====================*/
	var winScrollTop = 0;
	$(window).on('scroll', function() {
		var nav = $('#navbar');
		var top = 200;
		if ($(window).scrollTop() >= top) {
			nav.addClass('onscroll');
		} else {
			nav.removeClass('onscroll');
		}
		winScrollTop = $(this).scrollTop();
		parallax();
	});

	
	/* 4. Navbar collapse
	====================*/
	$('.navbar-nav>li>a').not('.dropdown-toggle').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});

	
	
	

}());