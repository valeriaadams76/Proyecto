document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       🕒 FECHA Y HORA ACTUAL
    ========================== */

    const fechaHora = document.getElementById("fechaHora");
    const anio = document.getElementById("anio");

    function actualizarFechaHora() {
        const ahora = new Date();

        const opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };

        const fecha = ahora.toLocaleDateString("es-ES", opciones);
        const hora = ahora.toLocaleTimeString("es-ES");

        fechaHora.textContent = `Hoy es ${fecha} | Hora actual: ${hora}`;
        anio.textContent = ahora.getFullYear();
    }

    actualizarFechaHora();
    setInterval(actualizarFechaHora, 1000);



});