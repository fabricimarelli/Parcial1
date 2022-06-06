window.onload=function(){

    document.getElementById("frm").addEventListener('submit', validar);

    //variables
    var nombre = document.getElementById('nombre');
    var error_nombre = document.getElementById('error-nombre');
    var apellido = document.getElementById('apellido');
    var error_apellido = document.getElementById('error-apellido');
    var email = document.getElementById('email');
    var error_email = document.getElementById('error-email');
    var edad = document.getElementById('edad');
    var error_edad = document.getElementById('error-edad');
    var sexo = document.getElementsByName('sexo');
    var error_sexo = document.getElementById('error-sexo');
    var temas = document.getElementsByName('temas');
    var error_temas = document.getElementById('error-temas');

    //validacioness
    function validar(evento){
        evento.preventDefault();
        largo(nombre,error_nombre,apellido,error_apellido);
        validar_email();
        validar_edad();
        validar_sexo();
        validar_temas();
        //validar_vacios();
    }
    
    //valida  nombre y apellido
    function largo(x,y,z,w){
        if(x.value.length < 3){
            y.classList.remove('ocultar-error');
        }
        if(z.value.length<3){
            w.classList.remove('ocultar-error')
        }
    }

    //valida email
    function validar_email(){
        emailEstructura = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailEstructura.test(email.value)) {
            error_email.classList.remove('ocultar-error');
        }
    }

    //valida edad entero (0;100)
    function validar_edad(){
        if(edad.value <= 0 || edad.value >=100 ){
            error_edad.classList.remove('ocultar-error');
        }
    }

    //valida sexo
    function validar_sexo() {
        if ((sexo[0].checked == false) && (sexo[1].checked == false)){
            error_sexo.classList.remove('ocultar-error');
        }
    }

    
    //Funcion limpiar error
    function limpiar_error(tipo_error) {
      return  tipo_error.classList.add('ocultar-error');
    }
    
    nombre.addEventListener('focus', limpiar_error);
    apellido.addEventListener('focus', limpiar_error_apellido);


    function limpiar_error_nombre(evento) {
        error_nombre.classList.add('ocultar-error');
    }
    function limpiar_error_apellido(evento) {
        error_apellido.classList.add('ocultar-error');
    }
    
    email.addEventListener('focus',limpiar_error_mail);

    function limpiar_error_mail(evento) {
        error_mail.classList.add('esconder_error');
    }


    edad.addEventListener('focus',limpiar_error_edad);

    function limpiar_error_edad(evento) {
        error_edad.classList.add('esconder_error');
    }

    function validar_sexo() {
        if ((sexo[0].checked == false) && (sexo[1].checked == false)){
            error_sexo.classList.remove('esconder_error');
        }
    }

    sm.addEventListener('change',limpiar_error_sexo);
    sf.addEventListener('change',limpiar_error_sexo);

    function limpiar_error_sexo(evento) {
        error_sexo.classList.add('esconder_error');
    }

    function validar_temas(){
        var i=0;
        var j=0;
        for (i = 0; i < temas.length; i++) {
            var element = temas[i];
            if(element == null){
                j++;
            } 
        }
        if(j == 5){
            error_temas.classList.remove('esconder_error');
        }
    }
}


