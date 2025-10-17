function calcularTotal() {
  let p = parseFloat(document.getElementById('procesador').value);
  let m = parseFloat(document.getElementById('monitor').value);
  let d = parseFloat(document.getElementById('disco').value);
  let total = p + m + d;
  document.getElementById('total').value = '$' + total;
}