function validateForm(){
    var nom = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var cor = document.getElementById("input-email").value;
    var contr = document.getElementById("input-password").value;
    var opcion = document.querySelector("select").value;

    if (nom.length == 0 && apellido == 0 && cor == 0 && contr == 0) {
        alert ("Complete todos campos");
    } else {

        if( nom == null || nom.length == 0 || nom == ""){
            alert("Escribe tu nombre.");
        }else if ( /[0-9]/.test(nom)){
            alert("No ingrese números.")
        }else if ( /^[a-z]/.test(nom.charAt(0))){
            alert ("Escriba el primer caracter de su nombre en mayúscula.")
        }

        if( apellido == null || apellido.length == 0 || apellido == ""){
            alert("Escribe tu apellido.");
        }else if ( /[0-9]/.test(apellido)){
            alert("No ingrese números.")
        }else if ( /^[a-z]/.test(apellido.charAt(0)) ){
            alert ("Escriba el primer caracter de su apellido en mayúscula.")
        }

        var correos=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!correos.test(cor)) {
            alert("Ingrese un correo válido.");
        };

        if (contr == null || contr.length == 0){
            alert("Ingresa una contraseña");
        }else if (contr.length < 6){
            alert("contraseña no valida (debe contener más de 6 caracteres)");
        }
        if (contr == "123456" || contr == "098754" || contr == "password"){
            alert ("123456, 0987654, password; no son contraseñas válidas");
        }

        if(opcion == 0) {
            alert("Elige una opción.");
        }    
    };
}