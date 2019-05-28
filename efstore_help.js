
$(document).ready(function () {
	var pagename = window.location.pathname.split('.jsp')[0].split('?')[0].split('/').pop();
	console.log(pagename);
	$('#register_shop_body').html();
});

