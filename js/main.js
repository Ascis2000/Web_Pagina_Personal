
window.addEventListener('load', (event) => {
    inicio();
});

function inicio(){
    menuTopNavegacion();
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

function menuTopNavegacion(){

    let pathName = window.location.href.includes('pages') ? '../' : './';

    //alert(window.location.pathname)
    let dataNavegacion = [
        {texto:"Home", link:  pathName + "index.html", target:""},
        {texto:"Biografía", link: pathName + "pages/biografia.html", target:""},
        {texto:"Portfolio", link:"/index.html", target:"_blank"},
        {texto:"Code Wars", link:"/index.html", target:"_blank"},
        {texto:"Contacto", link: pathName + "pages/contacto.html", target:""},
    ];
    let selectorEnlaces = document.querySelectorAll(".boxNavegacion .navegacion a");

    for(let i=0; i < selectorEnlaces.length; i++){
        selectorEnlaces[i].href = dataNavegacion[i].link;
        selectorEnlaces[i].target = dataNavegacion[i].target;
    }
}

