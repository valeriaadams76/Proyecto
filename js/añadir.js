// Cargar datos guardados o iniciar vacío
let pcs = JSON.parse(localStorage.getItem("pcsAula")) || [];

// Guardar en localStorage
function guardarDatos() {
    localStorage.setItem("pcsAula", JSON.stringify(pcs));
}

// Renderizar tabla
function renderTabla() {

    const tabla = document.getElementById("tablaPCs");
    if (!tabla) return;

    tabla.innerHTML = "";

    pcs.forEach((pc, index) => {

        tabla.innerHTML += `
        <tr>
            <td>${pc.PC}</td>
            <td>${pc.Nombre}</td>
            <td>${pc.modelo}</td>
            <td>${pc.procesador}</td>
            <td>${pc.Velocidad}</td>
            <td>${pc.ram}</td>
            <td>${pc.tarjetaGrafica}</td>
            <td>${pc.disco}</td>
            <td>${pc.modeloWindows}</td>
            <td>${pc.Microsoft}</td>
            <td>${pc.LibreOffice}</td>
            <td>
                <button class="eliminar-btn" data-index="${index}">
                Eliminar
                </button>
            </td>
        </tr>
        `;
    });

    // Eventos eliminar
    document.querySelectorAll(".eliminar-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const index = this.getAttribute("data-index");
            eliminarPC(index);
        });
    });
}

// Añadir PC
function agregarPC() {

    const nuevoPC = {
        PC: document.getElementById("PC").value.trim(),
        Nombre: document.getElementById("Nombre").value.trim(),
        modelo: document.getElementById("modelo").value.trim(),
        procesador: document.getElementById("procesador").value.trim(),
        Velocidad: document.getElementById("Velocidad").value.trim(),
        ram: document.getElementById("ram").value.trim(),
        tarjetaGrafica: document.getElementById("tarjetaGrafica").value.trim(),
        disco: document.getElementById("disco").value.trim(),
        modeloWindows: document.getElementById("modeloWindows").value.trim(),
        Microsoft: document.getElementById("Microsoft").value.trim(),
        LibreOffice: document.getElementById("LibreOffice").value.trim()
    };

    // Validación
    if (Object.values(nuevoPC).some(valor => valor === "")) {
        alert("Completa todos los campos");
        return;
    }

    pcs.push(nuevoPC);
    guardarDatos();
    renderTabla();

    limpiarFormulario();
}

// Eliminar PC
function eliminarPC(index) {
    pcs.splice(index, 1);
    guardarDatos();
    renderTabla();
}

// Limpiar formulario
function limpiarFormulario() {
    document.querySelectorAll(".formulario-pc input").forEach(input => {
        input.value = "";
    });
}

// Evento botón
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnAgregar");
    if (btn) {
        btn.addEventListener("click", agregarPC);
    }

    renderTabla();
});