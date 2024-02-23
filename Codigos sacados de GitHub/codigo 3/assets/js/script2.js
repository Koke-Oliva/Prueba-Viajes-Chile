// Tooltip
let listaDisparadoresTooltip = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let listaTooltip = listaDisparadoresTooltip.map(function (disparadorTooltip) {
    return new bootstrap.Tooltip(disparadorTooltip);
});

$(function () {
    $(document).scroll(function () {
        let $nav = $(".fijo-arriba"); // Actualizado para coincidir con el nuevo nombre de clase
        $nav.toggleClass('desplazada', $(this).scrollTop() > $nav.height());
    });
});

