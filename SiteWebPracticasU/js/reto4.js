window.onload = function() {
  document.getElementById("output-img").innerHTML = "<img src='imagenes/logo.jpg' class='img-fluid rounded' alt='logo' />";
  
  document.getElementById("pais").onchange = function(e) {
      let n = e.target.value;
      let imagen = "<img src='imagenes/reto4/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt='paises' />";
      let text = [
          "Costa Rica",
          "Panamá",
          "El Salvador",
          "Honduras",
          "México",
          "Estados Unidos",
          "Canadá",
          "Nicaragua",
      ];
      document.getElementById("output-img").innerHTML = imagen;
      document.getElementById("output-txt").innerHTML = text[n - 1];
  }

  document.getElementById("btn-clean").onclick = function() {
      document.getElementById("output-img").innerHTML = "<img src='imagenes/logo.jpg' class='img-fluid rounded' alt='logo' />";
      document.getElementById("output-txt").innerHTML = "";
      document.getElementById("pais").value = "";
  }
}

function validarSeleccionPais() {
    var paisSeleccionado = document.getElementById("pais").value;
    if (paisSeleccionado === "") {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Primero debes seleccionar un pais para poder reiniciar.',
      });
    }
  }
  
  document.getElementById("btn-clean").addEventListener("click", validarSeleccionPais);
