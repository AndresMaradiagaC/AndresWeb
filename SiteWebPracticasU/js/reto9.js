function confirmarCompra() {
    const metodoPagoSeleccionado = document.querySelector('input[name="r1"]:checked');
  
    if (!metodoPagoSeleccionado) {
      Swal.fire('Error', 'Debes seleccionar un método de pago', 'error');
    } else {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Quieres confirmar la compra?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, comprar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Enviado', 'La compra se ha realizado exitosamente.', 'success');
        }
      });
    }
  }
  