document.getElementById('formContacto').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('alertaEnviado').classList.remove('d-none');
});