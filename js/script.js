//---------- Scrollto segun el tamaño de pantalla ----------


$(document).ready(function () {

	$(document).ready(function () {
		var windowWidth = $(window).width();
		var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

		$('.scrollTo').click(function () {
			var getElement = $(this).attr('href');
			if ($(getElement).length) {
				var getOffset = $(getElement).offset().top;
				var targetDistance1 = -200;
				var targetDistance2 = -100;

				$('html,body').animate({
					scrollTop: getOffset + targetDistance2
				}, 500);

			}
		})
		return false;
	});
});




//---------- Abriendo y cerrando los div de contenido de servicio ----------

$('.in-1').click(function () {
	console.log('click-item1');


	$('.servicio-content1').addClass('height-content');
	$('.servicio-content2').removeClass('height-content');
	$('.barra-vert').removeClass('barra-vert2');
	$('.prepago-mod, .directorio-mod').removeClass('content-open');
	$('.sic-options').removeClass('content-close');
	$('.sc-inner').removeClass('sc-inner-padd');

	/* Display form prepagos */
	setTimeout(function(){ 
		$('#prepago-form1').removeClass('display-none');
		$('#prepago-form2').addClass('display-none');
	}, 400);



})
$('.in-2').click(function () {
	console.log('click-item2');

	$('.servicio-content1').removeClass('height-content');
	$('.servicio-content2').addClass('height-content');
	$('.barra-vert').removeClass('barra-vert2');
	$('.prepago-mod, .directorio-mod').removeClass('content-open');
	$('.sic-options').removeClass('content-close');
	$('.sc-inner').removeClass('sc-inner-padd');
	$('#prepago-form2').removeClass('display-block');
	$('#prepago-form1').addClass('display-block');

});

// cerrando los div de contenido de servicio on click
$('.close, .volver').click(function () {
	$('.barra-vert').removeClass('barra-vert2');
	$('.prepago-mod, .directorio-mod').removeClass('content-open');
	$('.sic-options').removeClass('content-close');
	$('.sc-inner').removeClass('sc-inner-padd');
	$('.volver').removeClass('content-open');
	
});


$('.close').click(function () {
	$('.owl-item.checked').not(this).removeClass('checked');
	$('.sc-bg').removeClass('height-content');
	('.info1, .info2').removeClass('content-open');
});

//---------- mostrando los div de informacion de contenido de servicio ----------


$('#Movistar, #Digitel, #Movilnet, #Globallink, #Telcel, #Claro').click(function (e) {
	$('.info1').addClass('content-open');
	//$('.info2').removeClass('content-open');
	var brand = this.id + 'Logo01.svg';
	console.log(brand);
	$('.brand-serv1').attr("src", "img/" + brand)
});
$('#Inter, #Directv, #Cinesunidos').click(function () {
	$('.info2').addClass('content-open');
	//$('.info1').removeClass('content-open');
	var brand2 = this.id + 'Logo01.svg';
	console.log(brand2);
	$('.brand-serv2').attr("src", "img/" + brand2)
});


//---------- Agregando la clase checked al servicio seleccionado ----------


$(".owl-item").click(function () {
	$('.owl-item.checked').not(this).removeClass('checked');
	if ($(".owl-item").hasClass('checked')) {
		//se mantiene la clase checked;
	} else {
		$(this).toggleClass('checked');
	}

});





$('.close').click(function () {
	$('div.sc-bg').parent();
	var padre = $('div.sc-bg').parent();
	console.log(padre);
});



//---------- Mostrando el logo de Payall blanco al bajar el scroll ----------

$(window).scroll(function () {
	if ($(this).scrollTop() > 80) {
		$('.sidebar-logo').addClass('sidebar-logo-display');
	} else {
		$('.sidebar-logo').removeClass('sidebar-logo-display');
	}
});



//------------- Collapse elements + switch buttons ----------------

$(document).ready(function () {
	$('.coll2').collapsible();

	$('.nro-tarjeta').click(function () {
		$('.coll2').collapsible('close', 0);
	})
});

$(document).ready(function () {
	$('.btn1').click(function () {
		$(this).addClass('button-fill-right');
		$(this).addClass('color-blanco');
		$('#cards2').addClass('card-close');
		$('#cards1').removeClass('card-close');
		$('.btn2').removeClass('button-fill-left');
		$('.btn2').removeClass('color-blanco');
		$('.btn-img1').attr('src', 'img/iconos-small/IconoTarjeta.svg');
		$('.btn-img2').attr('src', 'img/iconos-small/IconoTarjeta2.svg');
		$('.coll2').collapsible('close', 0)
	})
	$('.btn2').click(function () {
		$(this).addClass('button-fill-left');
		$(this).addClass('color-blanco');
		$('#cards1').addClass('card-close');
		$('#cards2').removeClass('card-close');
		$('.btn1').removeClass('button-fill-right');
		$('.btn1').removeClass('color-blanco');
		$('.btn-img2').attr('src', 'img/iconos-small/IconoTarjeta.svg');
		$('.btn-img1').attr('src', 'img/iconos-small/IconoTarjeta2.svg');
		$('.coll2').collapsible('close', 0)
	})
})



//---
$(document).ready(function () {
	$('.prepago-1, .directorio-1').click(function () {
		$('.sc-inner').addClass('sc-inner-padd');
		$('.servicio-content2').removeClass('height-content-pagos');
		$('.barra-vert').addClass('barra-vert2');
		$('.sic-options, .volver').addClass('content-close');
		$('.volver').addClass('content-open');
	})

});
$(document).ready(function () {
	$('.prepago-1').click(function () {
		$('.prepago-mod').addClass('content-open');
	})
	$('.directorio-1').click(function () {
		$('.directorio-mod').addClass('content-open');
	})
});

$('.prep-dir').click(function () {
	$('#prepago-form1').addClass('display-none');
	$('#prepago-form2').removeClass('display-none');
});
