//---------- Scrollto segun el tamaño de pantalla ----------


		$(document).ready(function(){
			
			$(document).ready(function(){
			var windowWidth = $(window).width();
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			
			$('.scrollTo').click(function(){
				var getElement = $(this).attr('href');
				if($(getElement).length){
					var getOffset = $(getElement).offset().top;
					var targetDistance1 = -200;
					var targetDistance2 = 0;
					
						$('html,body').animate({
							scrollTop:getOffset + targetDistance2
						}, 500);
					
				}
			})
			return false;
		});
	});




//---------- Abriendo y cerrando los div de contenido de servicio ----------

	$('.in-1').click(function(){
		console.log('click-item1');
		//$('.servicio-content1').css('height','220');
		//$('.servicio-content2').css('height','0');
		//alert($(this).attr('id'));
		
		$('.servicio-content1').addClass('height-content');
		$('.servicio-content2').removeClass('height-content');
	})
	$('.in-2').click(function(){
		console.log('click-item2');
		//$('.servicio-content1').css('height','0');
		//$('.servicio-content2').css('height','220');
		
		$('.servicio-content1').removeClass('height-content');
		$('.servicio-content2').addClass('height-content');
		
	});
	
// cerrando los div de contenido de servicio on click
	$('.close').click(function(){
		$('.sc-bg').removeClass('height-content');
		$('.owl-item.checked').not(this).removeClass('checked');
		$('.info1').removeClass('content-open');
		$('.info2').removeClass('content-open');

	});




//---------- mostrando los div de informacion de contenido de servicio ----------


	$('#movistar, #movilnet, #telcel, #movistar2, #movilnet2').click(function(){
		$('.info1').addClass('content-open');
		$('.info2').removeClass('content-open');
	});
	$('#digitel, #globalink, #claro, #digitel2').click(function(){
		$('.info2').addClass('content-open');
		$('.info1').removeClass('content-open');
	});
	

//---------- Agregando la clase checked al servicio seleccionado ----------


$(".owl-item").click(function(){
    $('.owl-item.checked').not(this).removeClass('checked');
	if($(".owl-item").hasClass('checked')){
		//se mantiene la clase checked;
	}else{
		$(this).toggleClass('checked');
	}
    
 });	





	$('.close').click(function(){
		$('div.sc-bg').parent();
		var padre= $('div.sc-bg').parent();
		console.log(padre);
	});



//---------- Mostrando el logo de Payall blanco al bajar el scroll ----------

	$(window).scroll(function(){
		if($(this).scrollTop() > 80){
			$('.sidebar-logo').addClass('sidebar-logo-display');
		}else{
			$('.sidebar-logo').removeClass('sidebar-logo-display');
		}
	});
