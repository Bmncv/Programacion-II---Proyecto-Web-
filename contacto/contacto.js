// contacto.js


function recoleccion(){
    var nombre =document.getElementById("nombre").value;
    
    var email =document.getElementById("email").value;
    var telefono =document.getElementById("telefono").value;
    var cantpersonas =document.getElementById("cantidadPersonas").value;
    var fecha =document.getElementById("fechaReserva").value;
    var msj =document.getElementById("Mensaje").value;
    
    var informacion = "Nombre: " + nombre + "\n" +
                      "Email: " + email + "\n" +
                      "Teléfono: " + telefono + "\n" +
                      "Cantidad de Personas: " + cantpersonas + "\n" +
                      "Fecha de Reserva: " + fecha + "\n" +
                      "Mensaje: " + msj;
    
    
    
    
    if (nombre === "" || telefono === "" || cantpersonas === "" || fecha === "") {
        var mensaje = "Por favor, complete los siguientes campos:\n";
    
        if (nombre === "") {
            mensaje += "- Nombre\n";
        }
    
        if (telefono === "") {
            mensaje += "- Teléfono\n";
        }
    
        if (cantpersonas === "") {
            mensaje += "- Cantidad de Personas\n";
        }
    
        if (fecha === "") {
            mensaje += "- Fecha de Reserva\n";
        }
    
        alert(mensaje);
    }
    
     //console.log(nombre + " " + email + " " + telefono + " " + cantpersonas + " " + fecha + " " + msj);


    
}

