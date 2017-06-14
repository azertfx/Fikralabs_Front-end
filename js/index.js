$(document).ready(function() {
	$("#team-slide").owlCarousel({
	autoPlay : 3000,
	navigation : true,
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem : true
	});
	$("#team-box").owlCarousel({
      autoPlay: 3000,
      items : 5,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3]
    });
    $("#partenaire-box").owlCarousel({
      autoPlay: 3000,
      items : 6,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,3]
    });
  /***************  Preloader   ***************/
  $(window).load(function() {  
    $('#load').fadeOut(1000);
    $('#fullpage, #fp-nav').fadeIn(1000);
    $('body').css('overflow-x','hidden !important');
    var p_width = $(window).width();
    $('#fp-nav').css('display','block !important');
  });
  $(window).resize(function(){
    var p_width = $(window).width();
    $('#fp-nav').css('display','block !important');
  });
});