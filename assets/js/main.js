// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import bootstrap from 'bootstrap'

//
// Place any custom JS here
//

document.addEventListener("DOMContentLoaded", () => {
    console.log("ready!");

    // Inicializar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
        new bootstrap.Tooltip(tooltipTriggerEl, {
            placement: 'top'
        });
    });
});

document.getElementById('enviarformulario').addEventListener('click', () => {
    alert("El formulario fue enviado correctamente...");
});
