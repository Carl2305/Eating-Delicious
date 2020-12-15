// JavaScript Document

$(document).ready(function(){	
	alerta();
	social();
});
function alerta(){
	$(".btnComp").click(function(){
		alert("SIN SERVICIO");
	});
}
function social(){
	$(".imgRds").click(function(){
		switch($(this).data("cod")){
			case 0:
				window.open("https://www.facebook.com/"); break;
			case 1:
				window.open("https://www.instagram.com/"); break;
			default:
				window.open("https://mail.google.com/");
		}
	});
}

/********** QUEJAS Y SUGERENCIAS **************/
/***************************************/
//limpieza de inputs del formulario de quejas y sugerencias
/***************************************/
function borrar(){
	$("#validationDefault01").val('');
	$("#validationDefault02").val('');
	$("#validationDefault03").val('');
	$("#validationDefault04").val('');
	$("#validationDefault05").val('');
	$("#validationDefault06").val('');
	$("#validationDefault01").focus();

}
/***************************************/
//validacion del formulario de quejas y sugerencias
/***************************************/
function validarQYS() {
	var nombre, ApPAter, ApMAter, telefono, email, mensaje, expresion1, expresion2;
	nombre=$("#validationDefault01").val();
	ApPAter=$("#validationDefault02").val();
	ApMAter=$("#validationDefault03").val();
	email=$("#validationDefault04").val();
	telefono=$("#validationDefault05").val();
	mensaje=$("#validationDefault06").val();
	
	expresion1=/\w+@\w+\.[a-z]/;
	expresion2=/^9[0-9]{8}/;
	if(nombre===""||ApPAter===""||ApMAter===""||telefono===""||email===""||mensaje===""){
		alert("Todos los campos son obligatorios");
	}
	else if(nombre.length>40){
		alert("el nombre ingresado es demasiado largo");
	}
	else if(ApPAter.length>40){
		alert("el nombre ingresado es demasiado largo");
	}
	else if(ApMAter.length>40){
		alert("el nombre ingresado es demasiado largo");
	}
	else if(email.length>80){
		alert("el email ingresado es demasiado largo");
		$("#validationDefault04").focus();
	}
	else if(!expresion1.test(email)){
		alert("el correo no es valido");
		$("#validationDefault04").focus();
	}
	else if(telefono.length<9){
		alert("el teléfono ingresado es demasiado corto."+"\n"+"El teléfono debe tener 9 dígitos");
		$("#validationDefault05").focus();
	}
	else if(telefono.length>9){
		alert("el teléfono ingresado es demasiado largo."+"\n"+"El teléfono debe tener 9 dígitos");
		$("#validationDefault05").focus();
	}
	else if(isNaN(telefono)){
		alert("El teléfono son solo digitos");
		$("#validationDefault05").focus();
	}
	else if (!expresion2.test(telefono)){
		alert("El teléfono debe empezar con 9")
		$("#validationDefault05").focus();
	}
	else if(mensaje.length>500){
		alert("La queja y/o sugerencia ingresada es demasiado larga");
	}
	else {
		alert("Gracias por su Sugerencia. Su opinion nos importa" );
		enviarForm();
		borrar();
	}
}
/***************************************/
//enviar formulario de quejas y sugerencias
/***************************************/
function enviarForm(){
	alert("enviado");
	$("#formQYS").submit;
}
function smserror(){
	alert("Lo sentimos; esta funcion no esta disponible");
}
