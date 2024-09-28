
window.addEventListener('load', (event) => {
    inicio();
});

function inicio(){
    set_fecha();
}

function set_fecha(){
    let selectorFecha = document.querySelector("footer > small.fecha");
    selectorFecha.innerHTML = get_fechaActual();
}

function get_fechaActual() {
    const arr_diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const fecha = new Date();

    const dia = fecha.getDate(); // obtenemos el día
    const mes = fecha.toLocaleString('es-ES', { month: 'long' }); // Obtiene el mes en formato largo en español
    const año = fecha.getFullYear(); // obtenemos el año
    const nombreDia = fecha.getDay(); // obtiene un numero del 0 al 6
    const diaSemana = arr_diasSemana[nombreDia]; // obtenemos el nombre del dia de la semana

    return `Hoy es ${diaSemana}, ${dia} de ${mes} de ${año}`;
}
