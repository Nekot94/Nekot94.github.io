$(document).ready(function() {
	
	$('.inventory_shop h3').on('click', function () {
    $('.inventory_items').toggleClass('inventory_items__deact');
    $('.inventory_shop').toggleClass('inventory_shop__active');
	});
		
});