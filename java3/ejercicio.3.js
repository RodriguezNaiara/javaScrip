function mostrarMayor() {
  let n1 = parseFloat(document.getElementById('n1').value);
  let n2 = parseFloat(document.getElementById('n2').value);

  if (n1 > n2) {
    alert('El mayor es: ' + n1);
  } else if (n2 > n1) {
    alert('El mayor es: ' + n2);
  } else {
    alert('Son iguales');
  }
}