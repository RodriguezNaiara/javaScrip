function mostrarPrecio() {
  let seleccion = document.getElementById('pizza');
  let precio = seleccion.options[seleccion.selectedIndex].value;
  document.getElementById('precio').value = '$' + precio;
}