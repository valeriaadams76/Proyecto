document.addEventListener("DOMContentLoaded", function () {

    const datos = [
        { aula: "Aula 1", pc: "PC 1", nombre: "AULA01PILAR01", modelo: "HP ProDesk 400 G6", procesador: "i5-8500", enlace: "Aula/aula1.html" },
        { aula: "Aula 2", pc: "PC 1", nombre: "AULA02PILAR01", modelo: "HP ProDesk 400 G6", procesador: "i5-8500", enlace: "Aula/aula2.html" },
        { aula: "Aula 2", pc: "PC 12", nombre: "AULA02PILAR12", modelo: "HP ProDesk 400 G7", procesador: "i5-10500", enlace: "Aula/aula2.html" },
        { aula: "Aula 3", pc: "PC 1", nombre: "AULA03PILAR01", modelo: "HP EliteDesk", procesador: "i7-9700", enlace: "Aula/aula3.html" },
        { aula: "Aula 4", pc: "PC 5", nombre: "AULA04PILAR05", modelo: "Dell Optiplex", procesador: "i5-9500", enlace: "Aula/aula4.html" },
        { aula: "Aula 5", pc: "PC 3", nombre: "AULA05PILAR03", modelo: "HP ProDesk", procesador: "i5-8500", enlace: "Aula/aula5.html" },
        { aula: "Aula 6", pc: "PC 2", nombre: "AULA06PILAR02", modelo: "HP ProDesk", procesador: "i5-9500", enlace: "Aula/aula6.html" }
    ];

    const input = document.getElementById("busquedaGlobal");
    const resultados = document.getElementById("resultados");

    input.addEventListener("keyup", function () {

        const texto = this.value.toLowerCase();
        resultados.innerHTML = "";

        if (texto === "") return;

        const filtrados = datos.filter(item =>
            item.nombre.toLowerCase().includes(texto) ||
            item.modelo.toLowerCase().includes(texto) ||
            item.procesador.toLowerCase().includes(texto) ||
            item.aula.toLowerCase().includes(texto)
        );

        if (filtrados.length === 0) {
            resultados.innerHTML = "<p>No se encontraron resultados</p>";
            return;
        }

        filtrados.forEach(item => {
            const div = document.createElement("div");
            div.style.background = "#d89128";
            div.style.padding = "10px";
            div.style.margin = "10px 0";
            div.style.borderRadius = "8px";

            div.innerHTML = `
                <strong>${item.aula}</strong> - ${item.pc} <br>
                ${item.nombre} <br>
                Modelo: ${item.modelo} <br>
                Procesador: ${item.procesador} <br>
                <a href="${item.enlace}" style="color:yellow;">Ver aula</a>
            `;

            resultados.appendChild(div);
        });

    });

});