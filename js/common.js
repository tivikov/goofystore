$(function() {

	// Custom JS
	var logo = document.getElementById('logo');
	logo.innerHTML = logo.innerHTML.replace(/(Store)/g, "<span>$1</span>");
	$('.humb').click(function(){
		$('.top-line-mobile-menu').stop().slideToggle();
	})

	var max_h = 0;
	$('.clatches-item-img').each(function() {
		var h = $(this).height();
		if(h>max_h) {
			max_h = h;
		}
	})
	$('.clatches-item-img').height(max_h);

	 max_h = 0;
	$('.order-step-title').each(function () {
		var h = $(this).height();
		if (h > max_h) {
			max_h = h;
		}
	})
	$('.order-step-title').height(max_h);
});

$(document).ready(function(){
	$('.slick-container').slick({
		dots: true,
		slidesPerRow: 3,
		rows: 2
	});
})
