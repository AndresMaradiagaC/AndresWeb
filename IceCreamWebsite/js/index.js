function validarYEnviar() {
  var email = document.getElementById("email").value;

  if (email === "") {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, ingrese su correo electrónico',
      });
  } else {
      Swal.fire({
          title: '¿Estás seguro?',
          text: '¿Deseas confirmar la subscripcion para recibir descuentos exclusivos, ideas de viaje y novedades sobre nuestros destinos.?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sí, enviar',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire({
                  icon: 'success',
                  title: '¡Subscrición exitosa!',
                  text: 'La subscripcion se ha realizado con exito.',
              });

          }
      });
  }
}
