let claveActual = "docente.YELA.TEC.2025";

function mostrarLogin() {
  document.getElementById("login").style.display = "block";
}

function verificarClave() {
  const claveIngresada = document.getElementById("clave").value;
  const errorTexto = document.getElementById("error");

  if (claveIngresada === claveActual) {
    window.location.href = "docente.html";
  } else {
    errorTexto.textContent = "⚠️ Clave incorrecta. Inténtelo de nuevo.";
  }
}

function redirigirEstudiante() {
  alert("Bienvenido/a a YELA TEC 🌿 (modo estudiante)");
  // Aquí puedes redirigir o mostrar el contenido para estudiantes
}
