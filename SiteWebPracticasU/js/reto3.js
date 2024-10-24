document.getElementById('cineSelect').addEventListener('change', function() {
    const seleccion = this.value;
    let URL = '';
  
    switch (seleccion) {
      case 'este':
        URL = 'https://www.novacinemas.cr/cartelera/ciudad-del-este-curridabat/';
        break;
      case 'plaza real':
        URL = 'https://www.novacinemas.cr/cartelera/plaza-real-alajuela/';
        break;
      case 'curridabat':
        URL = 'https://www.novacinemas.cr/cartelera/ciudad-del-este-curridabat/';
        break;
    }
  
    if (URL) {
      window.open(URL, '_blank');
    }
  });

function reiniciar() {
    document.getElementById('cineSelect').value = '';
  }
  
  function mostrar() {
    Swal.fire({
      title: 'Instrucciones',
      text: 'Por favor, selecciona un cine para ver la cartelera de cada ubicación.',
      icon: 'info',
      confirmButtonText: 'Entendido'
    });
  }
  