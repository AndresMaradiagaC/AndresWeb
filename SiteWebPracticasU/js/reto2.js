"use strict";
var num = 1;

function agregar() {
    var nombreTxt = document.getElementById("nombre").value;
    var articuloTxt = document.getElementById("apellido").value;
    var precio = parseFloat(document.getElementById("precio").value) || 0;
    var cantidad = parseInt(document.getElementById("cantidad").value) || 0;
    var subtotal = precio * cantidad;
    var iva = subtotal * 0.13;
    var servicio = subtotal * 0.05;
    var totalPagar = subtotal + iva + servicio;

    if (nombreTxt === "" || articuloTxt === "" || precio <= 0 || cantidad <= 0) {
        Swal.fire({
            title: 'Atención',
            icon: 'error',
            iconColor: '#e31924',
            text: 'Campos vacíos o datos inválidos. Intenta de nuevo por favor.',
        })
    } else {
        var datosTabla = "<td>" + num + "</td><td>" + nombreTxt + "</td><td>" + articuloTxt + "</td><td>" + cantidad + "</td><td>" + "₡" + precio + "</td><td>" + "₡" + subtotal + "</td><td>" + "₡" + iva + "</td><td>" + "₡" + servicio+ "</td><td>" + "₡" + totalPagar + "</td>";
        var agregar = document.createElement("tr");
        agregar.innerHTML = datosTabla;
        document.getElementById('tabla').appendChild(agregar);
        num++;
    };

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
};

function limpiar() {
    num = 1;
    document.getElementById("tabla").innerHTML = "";
}

function instrucciones() {
    Swal.fire({
        title: 'Instrucciones',
        icon: 'info',
        iconColor: '#007BFF',
        text: 'Para hacer la factura, completa los campos de la izquierda y luego presiona el boton de "Agregar datos". Si los campos están vacíos o contienen datos inválidos, tendras un  error.'

    });
}
