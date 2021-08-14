$(document).ready(function($) {
	$(".content_toggle").click(function () {
	  $(".content_block",this).toggle(200);
	});
});


$(document).ready(function($) {
$('.button').click(function() {
	$('.buttonr').removeClass('active');
  $(this).toggleClass('active');
});

});

$(document).ready(function(){
$('.mobile div').on('click', () => {
	$('.mobile div').toggleClass('active');
$(".mobile nav ul a").click(function () {
	$('.mobile div').removeClass('active');
	$('.mobile nav').removeClass('open');
	$('.mobile nav ul').removeClass('show');
});
$('.mobile nav').toggleClass('open');
$('.mobile nav ul').toggleClass('show');
});
var a;
for (a = 1; a <= $(".mobile ul li").length; a++){ 
    $(".mobile ul li:nth-child("+ a +")").css("animation-delay", "."+ (a+1) +"s");    
}
});

$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		speed:2000,
		arrows:false,
		dots:true,
		responsive: [
			{
			breakpoint: 1441,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  autoplaySpeed: 1500,
				  speed:2500,
				  arrows:false,
				  dots: true
				}
			  },
			{
			  breakpoint: 1367,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplaySpeed: 2000,
				speed:3000,
				arrows:false,
				dots: true
			  }
			},
			{
			breakpoint: 1201,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint:1024,
				settings:{
					slidesToShow:1,
					slidesToScroll:1
				}
			},
			{
			  breakpoint: 769,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
		  ]
	});
	
});

