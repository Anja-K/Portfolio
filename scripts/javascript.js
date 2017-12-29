var slideIndex = 1;
		$(function(){

			var btt = $('.back-to-top');

			btt.on('click', function(){
				$('html, body').animate({
						scrollTop: 0
				}, 500);
			});

			var row = $('.appear');
  			var $window = $(window);
			
			var navOffset = $('nav').offset().top;

			var aboutTop = $('.about').offset().top;
			
			var skillsTop = $('.skills').offset().top;
			
			var portfolioTop = $('.portfolio').offset().top;
			
			var contactTop = $('.contact-wrapper').offset().top;

			$(window).on('scroll', function(){
				var scrollTop = $(window).scrollTop();
				
				var activeLi;

				if (scrollTop < aboutTop){
					activeLi = $('#home');
				}else if(scrollTop < skillsTop){
					activeLi = $('#about');
				}else if(scrollTop < portfolioTop){
					activeLi = $('#skills');
				}else if(scrollTop < contactTop){
					activeLi = $('#portfolio');
				}else{
					activeLi = $('#contact');
				}

				
				activeLi.addClass('active');
				$('.main-navigation li').not(activeLi).removeClass('active');
			});

			$('nav').wrap('<div class="nav-placeolder"></div>');

			$('.nav-placeholder').height($('nav').outerHeight());


			$(window).on('scroll', function(){

				var wind = $(this);

				var screenHeight = $window.height();
				

				var scrollPos = $window.scrollTop();
				



				if(scrollPos > screenHeight){
					if(!btt.is(':visible')){
						btt.fadeIn();
					}
				}else{
						btt.hide();
					}

				if(scrollPos >= navOffset){
					$('nav').addClass('fixed');
				}else{
					$('nav').removeClass('fixed');
				}


			var pad = Math.max(0, $window.height() - 100);
	    	
    		

    		if (!row.hasClass('visible') &&
        		scrollPos + pad > row.offset().top) {
      			row.addClass('visible');
      			return;
    		}

    		var barOffset = $('.resume').offset().top;
    		
    		var loaded = 1;
    		bar = $('.progress-bar');
    		if(scrollPos >= barOffset && !bar.hasClass('scrolled')){
    			bar.addClass('scrolled');
    			$(".progress-bar").loading();
    			$('.ability').fadeIn();
    		}

    		

			});

			$('#toggle-menu').on('click', function(e){
				e.preventDefault();
				$(this).toggleClass('change');
				$(this).nextAll('a').toggleClass('display');
			});


			var item = $(".item");

			$("#web-design").on('click', function(e){
				e.preventDefault();

				$('#items').removeClass('portfolio-items');
				$('#items').removeClass('portfolio-items-3');
				$('#items').addClass('portfolio-items-2');

				$('#graphic-design').removeClass('active');
				$('#all-items').removeClass('active');

				$(this).addClass('active');
				
					$('.web').removeClass('disappear');
					$('.graphic').addClass('disappear');

					$('#six').removeClass('six');
					$('#six').addClass('two');

					$('#seven').removeClass('seven');
					$('#seven').addClass('four');

			});


			$("#graphic-design").on('click', function(e){
				e.preventDefault();

				$('#items').addClass('portfolio-items-3');
				$('#items').removeClass('portfolio-items-2');
				$('#items').removeClass('portfolio-items');
				

				$('#web-design').removeClass('active');
				$('#all-items').removeClass('active');

				$(this).addClass('active');

					$('.graphic').removeClass('disappear');
					$('.web').addClass('disappear');

					$('#two').removeClass('two');
					$('#two').addClass('one');

					$('#four').removeClass('four');
					$('#four').addClass('two');

					$('#eight').removeClass('eight');
					$('#eight').addClass('three');

					$('#nine').removeClass('nine');
					$('#nine').addClass('four');
				
			});


			$("#all-items").on('click', function(e){
				e.preventDefault();

				$('#items').addClass('portfolio-items');
				$('#items').removeClass('portfolio-items-2');
				$('#items').removeClass('portfolio-items-3');

				$('#web-design').removeClass('active');
				$('#graphic-design').removeClass('active');

				$(this).addClass('active');
				
				
					
					$('.graphic').removeClass('disappear');
					$('.web').removeClass('disappear');


					$('#two').removeClass('one');
					$('#two').addClass('two');

					$('#four').removeClass('two');
					$('#four').addClass('four');


					$('#six').removeClass('one');
					$('#six').addClass('six');

					$('#seven').removeClass('two');
					$('#seven').addClass('seven');

					$('#eight').removeClass('three');
					$('#eight').addClass('eight');

					$('#nine').removeClass('four');
					$('#nine').addClass('nine');

				
			});

			


			$('.prev').on('click', function(){

				showSlides(slideIndex += -1, $(this));

			});

			$('.next').on('click', function(){
				showSlides(slideIndex += 1, $(this));
			});

			$('.fa-search').on('click', function(e){
				e.preventDefault();
					$('body').addClass('show-before');
					$(this).parents('.project').children('.test1').removeClass('test');

					var slideImg = $(this).parents('.project').children('.test1').find('.mySlides');

					if(slideImg.length != false){
					showSlides(slideIndex, $(this));
					}
				});				 
			


			function showSlides(n, object){

			 	  var i;
				  var slides = object.parents('.project').children('.test1').find('.mySlides');
				
				  if (n > slides.length) {slideIndex = 1} 
				  if (n < 1) {slideIndex = slides.length}
				  for (i = 0; i < slides.length; i++) {
				      slides.eq(i).css('display', 'none'); 
				  }
				  
				  slides.eq(slideIndex - 1).css('display', 'block'); 
			}

			$('.close').on('click', function(e){
				e.preventDefault();
				$('body').removeClass('show-before');
				$(this).parents('.test1').addClass('test');
				slideIndex = 1;
				
				
			});



	


			
		});