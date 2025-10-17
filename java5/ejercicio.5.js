function compararClaves() {
  let c1 = document.getElementById('clave1').value;
  let c2 = document.getElementById('clave2').value;

  if (c1 == c2) {
    alert('Las claves coinciden');
  } else {
    alert('Las claves no coinciden');
  }
}