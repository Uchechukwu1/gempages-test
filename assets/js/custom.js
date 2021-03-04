$(document).ready(function(){ 

		/*********** Nav menu ***************/
		$('.bar-icon').click(function(){
			$('.menubar-area').toggleClass('canvas-menu');
			return false;
		});
});
		  
		   $(window).on("scroll", function () {
				if ($(this).scrollTop() > 100) {
					$(".top-header").addClass("header-sticky");
				}
				else {
					$(".top-header").removeClass("header-sticky");
				}
			}) 
			
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 200) {
					$(".header-area").addClass("sticky");
				}
				else {
					$(".header-area").removeClass("sticky");
				}
			})
			