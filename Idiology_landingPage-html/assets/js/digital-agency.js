(($ => {
    $(window).on('load', () => {
		setTimeout(() => {
			$('.custom-hero-bg').addClass('loaded');
		}, 500);
	
	});
})).apply( this, [ jQuery ]);
