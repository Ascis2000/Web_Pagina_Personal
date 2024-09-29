
// Función para cargar las ciudades en el <select>
function cargarCiudades() {

    const ciudadesEspaña = [
        "Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza",
        "Málaga", "Murcia", "Córdova", "Las Palmas", "Bilbao"
    ];

    const selectorCiudades = document.getElementById("ciudades");
    // Agregar placeholder
    let placeholder = document.createElement("option");
    placeholder.text = "Selecciona una ciudad";
    placeholder.value = ""; // Deja el value vacío para que no seleccione ninguna ciudad
    placeholder.selected = true; // Que aparezca seleccionado por defecto
    selectorCiudades.add(placeholder);

    ciudadesEspaña.sort();

    ciudadesEspaña.forEach(ciudad => {
        let option = document.createElement("option");
        option.text = ciudad;
        option.value = ciudad.toLowerCase();
        selectorCiudades.add(option);
    });
}

// Llama a la función para cargar las ciudades en el <select>
cargarCiudades();

const comentario = document.getElementById("comentario");
comentario.value = comentario.value.trim() === "" ? "" : comentario.value.trim();


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    // console.log(event.target.elements);

    // Checkbox
    console.log(event.target.accept.checked);
    console.log(event.target.spam.checked);

    const nombre = event.target.nombre.value;
    const apellidos = event.target.apellidos.value;
    const email = event.target.email.value;
    const tlfn = event.target.tlfn.value;
    const ciudades = event.target.ciudades.value; // select
    const accept = event.target.accept.checked; //checkbox. Booleano
    const spam = event.target.spam.checked; //checkbox. Booleano
    

    let msj = "";

    // Lógica de validación
    // 3 < fname < 30 required
    if (nombre.length < 3 || nombre.length > 30) {
        //err
        console.log("Nombre fuera de tamaño: 3-30");
        msj += "Nombre fuera de tamaño: 3-30\n";
    }

    // 3 < lname < 30 required
    if (apellidos.length < 3 || apellidos.length > 30) {
        console.log("Apellido fuera de tamaño: 3-30");
        msj += "Apellido fuera de tamaño: 3-30\n";
    }

    if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
    ) {
        console.log("Error validación: " + email);
        msj += "Error validación: " + email+"\n";
    }

    // select required ??
    if (ciudades == "") {
        console.log("Selecciona alguna Ciudad");
        msj += "Selecciona alguna Ciudad\n";
    }

    //aceptar términos y publicidad
    if (!accept || !spam) {
        console.log("Por favor, acepta condiciones y envío de publicidad");
        msj += "Por favor, acepta condiciones y envío de publicidad\n";
    }
    console.log(msj);

    // Comprobar si hay errores
    if (msj.length != 0) {
        let mensajeError = document.getElementById("mensajeError")
        mensajeError.innerHTML = "";

        alert(msj);
        const textoFormateado = msj.replace(/\n/g, "<br>");
        mensajeError.innerHTML = textoFormateado;
    }
    else{
        //Enviar formulario
        //document.querySelector("form").submit();
        alert("Formulario enviado con éxito");
        event.target.submit();
    }
});