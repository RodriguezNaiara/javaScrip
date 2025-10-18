function corregir() {
  let correctas = 0;

  correctas += parseInt(document.getElementById('p1').value);
  correctas += parseInt(document.getElementById('p2').value);
  correctas += parseInt(document.getElementById('p3').value);
  correctas += parseInt(document.getElementById('p4').value);

  alert('Respuestas correctas: ' + correctas + '\nIncorrectas: ' + (4 - correctas));
}
