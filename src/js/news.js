
$('.footer-ul li a').click(function(event) {
	$(this).css('color', '#ff8307');
	$(this).parent().siblings('li').children('a').css('color', '#000');
});

// $('.nav-ul li').click(function(event) {
// 	$(this).css('border-bottom', '2px solid #fff');
// 	$(this).siblings('li').css('border', '0');
// 	console.log(1)
// })