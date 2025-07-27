
function mostrarLogin() {
  document.getElementById("login").style.display = "block";
}

function verificarClave() {
  const claveIngresada = document.getElementById("clave").value;
  const claveCorrecta = "docente.YELA.TEC.2025";

  if (claveIngresada === claveCorrecta) {
    window.location.href = "docente.html";
  } else {
    alert("⚠️ Clave incorrecta. Intenta nuevamente.");
  }
}
