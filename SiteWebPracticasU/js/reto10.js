function evaluar() {
    const digitosIngresados = document.getElementById('escala_txt').value;
    if (digitosIngresados.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Datos requeridos',
            text: 'Debes ingresar los dígitos de la cédula para buscar al empleado.'
        });
    } else {
        mostrarImagenPorDigitos(digitosIngresados);
    }
}

function limpiar() {
    const campoEscala = document.getElementById('escala_txt');
    campoEscala.value = '';
    
    const imagenes = document.querySelectorAll('[id^="ima"]');
    imagenes.forEach((imagen) => {
        imagen.style.display = 'none';
    });

    document.getElementById('fotoprede').style.display = 'block';
}

function mostrarImagenPorDigitos(digitos) {
    const imagenes = document.querySelectorAll('[id^="ima"]');
    let encontrada = false; 

    imagenes.forEach((imagen) => {
        const digitosImagen = imagen.getAttribute('data-digits');
        if (digitos === digitosImagen) {
            imagen.style.display = 'block';
            encontrada = true; 
        } else {
            imagen.style.display = 'none';
        }
    });

    if (!encontrada) {
        if (digitos.trim() !== '') {
            Swal.fire({
                icon: 'error',
                title: 'Usuario no existe',
                text: 'El usuario con los dígitos ingresados no existe.'
            });
        }
        document.getElementById('fotoprede').style.display = 'block';
    } else {
        document.getElementById('fotoprede').style.display = 'none';
    }
}
