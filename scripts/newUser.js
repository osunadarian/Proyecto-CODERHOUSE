//CLASE USUARIO
class Usuario{

    constructor(datos){

        this.nombre = datos.nombre;
        this.apellido = datos.apellido;
        this.correo = datos.correo;
        this.password = datos.password;
    }
}


let miFormulario = document.getElementById("form")
miFormulario.addEventListener("submit", validarFormulario);

//Funcion que regresa un mensaje de exito
function validarFormulario(e){

    e.preventDefault();

    let flag = 0;
    let datosIncompletos;
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let apellido = document.getElementById("apellido").value;
    let password = document.getElementById("password").value;

    //validacion para que complete todos los datos

    if( (nombre=="") || (apellido=="") || (correo=="") || (password=="") )
    {

        datosIncompletos = document.createElement("div");
        datosIncompletos.innerHTML = `<p class="error">Error</p><p>Debes completar todos los datos para poder registrarte en el sitior</p>`;
        document.getElementById("datos").append(datosIncompletos);
    
        datosIncompletos.className = "mensajeError";
        datosIncompletos.setAttribute("id","idMsjError");


    }else
    {
        flag = 1;
    }

    if(flag==1)
    {

        let formulario = document.getElementById("form");
        formulario.parentNode.removeChild(formulario);

        let nuevoContenido = document.createElement("div");
        nuevoContenido.innerHTML =  `<h2>${nombre}, gracias por registrarte.</h2>
        <p>Se ha enviado un mail de autentificacion al correo <span>${correo}</span></p>
        <p>Verificalo y regresa para completar los pasos restantes.</p>`;
    
        nuevoContenido.className = "info-cliente";
        document.getElementById("datos").append(nuevoContenido);

    }
    
}

