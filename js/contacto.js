
function inicioContacto(){
    // Cargamos las ciudades en un select
    cargarCiudades();

    // vaciamos el contenido del textarea
    const comentario = document.getElementById("comentario");
    comentario.value = comentario.value.trim() === "" ? "" : comentario.value.trim();
}

// Función para cargar las ciudades en el <select>
function cargarCiudades() {

    const ciudadesEspania = [
        {ciudad:"Madrid", valor:"madrid"},
        {ciudad:"Barcelona", valor:"barcelona"},
        {ciudad:"Valencia", valor:"valencia"},
        {ciudad:"Sevilla", valor:"sevilla"},
        {ciudad:"Málaga", valor:"malaga"},
        {ciudad:"Murcia", valor:"murcia"},
        {ciudad:"Córdova", valor:"cordova"},
        {ciudad:"Las Palmas", valor:"lpalmas"},
        {ciudad:"Bilbao", valor:"bilbao"},
        {ciudad:"Lugo", valor:"lugo"}
    ];

    const selectorCiudades = document.getElementById("ciudades");
    // Añadir opcion inicial seleccionada
    let placeholder = document.createElement("option");
    placeholder.text = "Selecciona una ciudad";
    placeholder.value = ""; // Deja el value vacío para que no seleccione ninguna ciudad
    placeholder.selected = true; // Que aparezca seleccionado por defecto
    selectorCiudades.add(placeholder);

    ciudadesEspania.sort((a, b) => a.ciudad.localeCompare(b.ciudad));

    ciudadesEspania.forEach(c => {
        let option = document.createElement("option");
        option.text = c.ciudad;
        option.value = c.valor.toLowerCase();
        selectorCiudades.add(option);
    });
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // paraliza envío formulario

    // console.log(event.target.elements);

    // Checkbox
    console.log(event.target.accept.checked);
    console.log(event.target.spam.checked);

    const nombre = event.target.nombre.value;
    const apellidos = event.target.apellidos.value;
    const email = event.target.email.value;
    const ciudades = event.target.ciudades.value; // select
    const accept = event.target.accept.checked; //checkbox. Booleano
    const spam = event.target.spam.checked; //checkbox. Booleano
    

    let msj = "";

    // Lógica de validación
    // 3 < fname < 30 required
    if (nombre.length < 3 || nombre.length > 30) {
        //err
        console.log("Nombre fuera de tamaño: 3-30");
        msj += "- Nombre fuera de tamaño: 3-30\n";
    }
    
    /* const regexNombre = /^[A-Za-zÀ-ÿ\s]{2,}$/;

    alert(regexNombre.test(nombre))
    if (regexNombre.test(nombre)) {
        console.log("Nombre fuera de tamaño: 3-30");
        msj += "Nombre fuera de tamaño: 3-30\n";
    } */

    // 3 < lname < 30 required
    if (apellidos.length < 3 || apellidos.length > 50) {
        console.log("Apellido fuera de tamaño: 3-50");
        msj += "- Apellido fuera de tamaño: 3-50\n";
    }

    if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
    ) {
        console.log("El email contiene errores");
        msj += "- El email contiene errores" + "\n";
    }

    // select required ??
    if (ciudades == "") {
        console.log("Selecciona alguna Ciudad");
        msj += "- Selecciona alguna Ciudad\n";
    }

    //aceptar términos y publicidad
    if (!accept || !spam) {
        console.log("Por favor, acepta condiciones y envío de publicidad");
        msj += "- Por favor, acepta condiciones y envío de publicidad\n";
    }
    console.log(msj);

    // Comprobar si hay errores
    if (msj.length != 0) {
        let mensajeError = document.getElementById("mensajeError")
        mensajeError.innerHTML = "";

        const textoFormateado0 = msj.replace(/\n/g, "<br>");
        //alert(msj);
        Swal.fire({
            html: msj.replace(/\n/g, "<br>"),
            icon: "error",
            width: 600,
            color: "red",
            customClass: {
                popup: 'custom-alerta-popup'
            }
        });
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

inicioContacto();