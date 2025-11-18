// Script para interacciones personalizadas
document.getElementById("toggleVisibility").addEventListener("click", function () {
    const elemento = document.getElementById("elemento");
    if (elemento.classList.contains("d-none")) {
        elemento.classList.remove("d-none");
        elemento.classList.add("d-block");
    } else {
        elemento.classList.remove("d-block");
        elemento.classList.add("d-none");
    }
});
