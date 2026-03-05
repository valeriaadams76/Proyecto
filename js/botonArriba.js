document.addEventListener("DOMContentLoaded", function () {
    /* =========================
       ⬆ BOTÓN VOLVER ARRIBA
    ========================== */

    const btnArriba = document.getElementById("btnArriba");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    btnArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
