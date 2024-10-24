window.onload = function() {
    document.getElementById("modelo").onchange = function(e) {
        a = e.target.value;
        if (a == "GLE Coupe") {
            var imagen = "imagenes/GLE Coupe.png";
        } else if (a == "Clase A Hatchback") {
            var imagen = "imagenes/Clase A Hatchback.png";
        } else if (a == "Clase E") {
            var imagen = "imagenes/Clase E.png";
        } else if (a == "Clase G") {
            var imagen = "imagenes/Clase G.png";
        }
        document.getElementById("imagen").src = imagen;
    }
    document.getElementById("version").onchange = function(es) {
        n = es.target.value;
    }
}



function calcular() {
    if (document.getElementById("modelo").value == "Seleccione un modelo:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            html: '<p class="formatos1"> Debes seleccionar el modelo del carro... </p> '
        })
    } else {
        if (document.getElementById("version").value == "Seleccione una versión:") {
            swal.fire({
                icon: "info",
                title: "Atención",
                html: '<p class="formatos1"> Debes seleccionar la versión del carro... </p> '
            })
        } else {
            var montoCuota = 0;
            if (a == "GLE Coupe") {
                if (n == "4x2") {
                    montoCuota = 1000;
                    swal.fire({
                        imageUrl: "imagenes/GLE Coupe.png",
                        html: "<p> Cuota mensual del GLE Coupe 4x2 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo GLE Coupe",
                    })
                } else {
                    montoCuota = 2000;
                    swal.fire({
                        imageUrl: "imagenes/GLE Coupe.png",
                        html: "<p>Cuota mensual del GLE Coupe 4x4 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo GLE Coupe",
                    })
                }
            } else if (a == "Clase A Hatchback") {
                if (n == "4x2") {
                    montoCuota = 800;
                    swal.fire({
                        html: "<p> Cuota mensual del Clase A Hatchback 4x2 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/Clase A Hatchback.png",
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Clase A Hatchback",
                    })
                } else {
                    montoCuota = 1600;
                    swal.fire({
                        html: "<p>Cuota mensual del Clase A Hatchback 4x4 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/Clase A Hatchback.png",
                        imageWidth: 600,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Clase A Hatchback",
                    })
                }
            } else if (a == "Clase E") {
                if (n == "4x2") {
                    montoCuota = 700;
                    swal.fire({
                        html: "<p> Cuota mensual del Clase E 4x2 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/Clase E.png",
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Clase E",
                    })
                } else {
                    montoCuota = 1400;
                    swal.fire({
                        html: "<p>Cuota mensual del Clase E 4x4 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/Clase E.png",
                        imageWidth: 700,
                        imageHeight: 250,
                        imageAlt: "Vehiculo Clase E",
                    })
                }
            } else if (a == "Clase G") {
                if (n == "4x2") {
                    montoCuota = 1500;
                    swal.fire({
                        html: "<p> Cuota mensual del Clase G 4x2 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/Clase G.png",
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Vehiculo Clase G",
                    })
                } else {
                    montoCuota = 3000;
                    swal.fire({
                        html: "<p>Cuota mensual del Clase G 4x4 <br><br> <strong>Cuota mensual:</strong></p> " + "$" + montoCuota,
                        imageUrl: "imagenes/Clase G.png",
                        imageWidth: 600,
                        imageHeight: 200,
                        imageAlt: "Vehiculo Clase G",
                    })
                }
            }
        }
    }
}