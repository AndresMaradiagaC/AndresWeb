
/*RETO6*/
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

function c4 () { 
    document.getElementById("vehiculo").src= "imagenes/naranja.png";
    document.getElementById ("color").innerHTML = "ORANGE";
}

function c5 () { 
    document.getElementById("vehiculo").src= "imagenes/verde.png";
    document.getElementById ("color").innerHTML = "Green";
}

function c6 () { 
    document.getElementById("vehiculo").src= "imagenes/morado.png";
    document.getElementById ("color").innerHTML = "PURPLE";
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
  