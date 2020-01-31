function notif_err(notificacion) {

	$('#notificacion p').html(notificacion);
	$('#notificacion').addClass('show-notif');
	$('#notificacion img').attr('src', 'img/iconos-small/IconoEquis.svg');


	$('#notificacion').click(function () {
		$('#notificacion').removeClass('show-notif');

	});

}

function notif_ex(notificacion) {

	$('#notificacion p').html(notificacion);
	$('#notificacion').addClass('show-notif');
	$('#notificacion img').attr('src', 'img/iconos-small/IconoCheck.svg');

	setTimeout(function () {

		$('#notificacion').removeClass('show-notif');

	}, 6000);

	$('#notificacion').click(function () {
		$('#notificacion').removeClass('show-notif');

	});
}


function validar() {
	var nombre, usuario, naci, cedula, correo, pass, pass2, expresion, exp_id_rif;
	nombre = document.getElementById("nombre").value;
	usuario = document.getElementById("usuario").value;
	naci = document.getElementById("naci").value;
	cedula = document.getElementById("cedula").value;
	correo = document.getElementById("correo").value;
	pass = document.getElementById("password").value;
	pass2 = document.getElementById("conf-password").value;

	expresion = /\w+@\w+\.+[a-z]/;

	//exp_id_rif = /^[V|E|J|P][0-9]{5,9}$/;
	exp_id_rif = /[0-9]{5,9}/;


	if (nombre === "" || usuario === "" || cedula === "" || correo === "" || pass === "" || pass2 === "") {
		notif_err('No puedes dejar campos vacios');

		return false;
	} else if (nombre.length <= 5) {

		notif_err('Nombre muy corto');
		return false;

	} else if (nombre.length > 30) {

		notif_err('Nombre muy Largo');
		return false;

	} else if (usuario.length <= 5) {

		notif_err('Nombre de usuario muy corto');
		return false;

	} else if (usuario.length > 30) {

		notif_err('Nombre de usuario muy Largo');
		return false;

	} else if (!exp_id_rif.test(cedula)) {

		notif_err('Nro de documento invalido');
		return false;

	} else if (cedula.length < 7) {

		notif_err('Nro de documento muy corto');
		return false;

	} else if (!expresion.test(correo)) {

		notif_err('Correo invalido');
		return false;

	} else if (pass !== pass2) {

		notif_err('Contraseñas no coinciden');
		return false;
	} else {

		notif_ex('Registro de usuario exitoso');
		return false;
	}


}





function validar_inicio() {
	var user_sigin, user_pass;
	user_sigin = document.getElementById("user-sigin").value;
	user_pass = document.getElementById("user_pass").value;



	if (user_sigin === "" || user_pass === "") {
		
		notif_err('No puedes dejar campos vacios');
		return false;
		
	}else{
		
		notif_ex('Iniciando sesion');
		return false;
	}
}




	/*---------------- LIMPIAR ------------------ */

	$(document).ready(function () {
		$('#limpiar').click(function (e) {

			var fg = '#form-registro :input';

			$('.fr-clean :input').val('');

			if ($(fg + '[type="text"]').hasClass('select-dropdown')) {
				$('.select-dropdown').val('V-');
			}

			//document.getElementById("form-registro").reset();
		})
	})



	/*------------------ VER CONTRASEÑAS ------------------ */

	$(document).ready(function () {
		$('#eye-pass, #eye-pass2, #eye-pass3').click(function () {
			var pid = $(this).parent().attr("id");
			//console.log(pid);

			//mostrando id del input
			var id_input;
			$("#" + pid + " :input").each(function (e) {
				id_input = this.id;
				//console.log(id_input);
			});
			//mostrando id de la etiqueta i
			var id_i;
			$("#" + pid + " .material-icons").each(function (e) {
				id_i = this.id;
				//console.log(id_i);
			});

			if ($(this).hasClass('visibility')) {
				$('#' + id_input).removeAttr('type');
				$('#' + id_i).addClass('visibility_off').removeClass('visibility');
				$('#' + id_i).html('visibility_off');
			} else {
				//Establecemos el atributo y valor
				$('#' + id_input).attr('type', 'password');
				$('#' + id_i).addClass('visibility').removeClass('visibility_off');
				$('#' + id_i).html('visibility');
			}
		});
	});


	/*------------------ CAMBIANDO DE FORMULARIOS ------------------ */

	$(document).ready(function () {
		$('.ses-ini').click(function () {
			$('.fci-2').removeClass('fci-hide');
			$('.fci-1').addClass('fci-hide');
		})
		$('.ses-reg').click(function () {
			$('.fci-1').removeClass('fci-hide');
			$('.fci-2').addClass('fci-hide');
		});
	});



	$('.ses-ini, .ses-reg').click(function () {
		$('.ini-flex .flex-ini2').css('height', $('.fci-2').height() + 'px');
	});
