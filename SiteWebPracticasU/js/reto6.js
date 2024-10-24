
function c1 () { 
    document.getElementById("vehiculo").src= "imagenes/rojo.png";
    document.getElementById ("color").innerHTML = "RED";
}

function c2 () { 
    document.getElementById("vehiculo").src= "imagenes/negro.png";
    document.getElementById ("color").innerHTML = " BLACK";
}

function c3 () { 
    document.getElementById("vehiculo").src= "imagenes/blanco.png";
    document.getElementById ("color").innerHTML = "WHITE";
}


function c5 () { 
    document.getElementById("vehiculo").src= "imagenes/grisoscuro.png";
    document.getElementById ("color").innerHTML = "GRIS OSCURO";
}

function c6 () { 
    document.getElementById("vehiculo").src= "imagenes/gris.png";
    document.getElementById ("color").innerHTML = "SILVER";
}


function confirmarEnvio() {
    const numeroTelefono = document.getElementById('numeroTelefono').value;
  
    if (!numeroTelefono || isNaN(numeroTelefono)) {
      Swal.fire('Error', 'Debes ingresar el numero de telefono', 'error');
    } else {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres enviar la información?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, enviar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Enviado', 'La información ha sido enviada correctamente.', 'success');
        }
      });
    }
  }
  