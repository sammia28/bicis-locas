function validateForm(){
    var nom = document.getElementById("name").value;
    if( nom == null || nom.length == 0 || nom == ""){
        alert("Escribe un nombre.");
    }else if ( /[0-9]/.test(nom)){
        alert("No ingrese números.")
    }else if ( /^[a-z]/.test(nom.charAt(0)) ){
        alert ("Escriba el primer carácter en mayúscula")
    }

    var apellido = document.getElementById("lastname").value;
    if( apellido == null || apellido.length == 0 || apellido == ""){
        alert("Escribe tu apellido.");
    }else if ( /[0-9]/.test(apellido)){
        alert("No ingrese números.")
    }else if ( /^[a-z]/.test(apellido.charAt(0)) ){
        alert ("Escriba el primer carácter en mayúscula.")
    }

    var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    cor = document.getElementById("input-email").value;
    if(!emailRegex.test(cor)) {
        alert("Ingrese un correo válido.");
    };

    var contr = document.getElementById("input-password").value;
    if (contr.length <= 6 || contr.length == 0 || contr == "123456" || contr == "98754" || contr == "password" ) {
        alert("Contraseña no válida.");
    }

    var opcion = document.querySelector("select").value;
    if( opcion == 0 ) {
        alert("Por favor, seleccione una opción en checkbox.");
    }
    return true;    
}