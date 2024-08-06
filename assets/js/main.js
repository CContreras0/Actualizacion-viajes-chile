// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// import bootstrap from 'bootstrap'

//
// Place any custom JS here
//

$(document).ready(function () {
    console.log("ready!");
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // Se aplica posicionamiento top por defecto a todos los tooltips de la página
    $('[data-toggle="tooltip"]').tooltip({
        placement: 'top'
    });
});
