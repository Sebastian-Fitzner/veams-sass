/**
 * Created by Sebastian on 18.08.14.
 */

$(document).ready(function() {

	createToc($('[data-toc="true"]'));

	$('pre code').each(function(i, block) {
		var height = $(this).outerHeight(),
			heightMax = 230;

		hljs.highlightBlock(block);

		if (height > heightMax) {
			$(this).addClass('js-close').attr('data-max-height', height).css('height', heightMax).parent().append('<button class="js-toggle"/>');
		}
	});

	$('.js-toggle').on('click', function() {
		var el = $(this).prev('code'),
			elData = el.data('max-height');

		if (el.outerHeight() > 230) {
			el.css('height', '230px');
		} else {
			el.css('height', elData + 30);
		}

		$(this).toggleClass('js-active').prev('code').toggleClass('js-close');

	});

	$('[data-nav-toggle="true"]').on('click', function(e) {
		var wrapper = $('#site-wrapper');

		e.preventDefault();

		if (wrapper.hasClass('show-nav')) {
			// Do things on Nav Close
			wrapper.removeClass('show-nav');
			$(this).removeClass('is-open');
		} else {
			// Do things on Nav Open
			wrapper.addClass('show-nav');
			$(this).addClass('is-open');

		}
	});

	$('[data-toc-link="true"]').on('click', function(e) {
		e.preventDefault();

		offsetScroll($($(this).attr('href')), 400, 200);
	});

	//setTimeout(function() {
	//	var sticky = $('[data-sticky="true"]');
	//	if (!!sticky.offset()) {
	//		var stickyTop = sticky.offset().top;
	//
	//		$(window).scroll(function() {
	//			var windowTop = $(window).scrollTop();
	//			if (stickyTop < windowTop) {
	//				sticky.css({
	//					position: "fixed",
	//					top: "0"
	//				})
	//			} else {
	//				sticky.removeAttr('style');
	//			}
	//		});
	//
	//	}
	//}, 500);

});

function createToc(el) {
	el.append('<ol class="toc__list"></ol>');

	$('.article__content h3').each(function() {
		var id = $(this).attr('id'),
			text = $(this).text();

		el.find('.toc__list').append('<li class="toc__list-item"><span class="toc__list-item-icon"></span><a data-toc-link="true" href="#' + id + '">' + text + '</a></li>');
	});
}

function offsetScroll(el, speed, delay) {
	setTimeout(function() {
		$("html, body").animate({
			scrollTop: el.offset().top
		}, speed);
	}, delay);
}
