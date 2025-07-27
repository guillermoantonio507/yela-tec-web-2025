// Clave secreta del docente
let claveActual = "docente.YELA.TEC.2025";

// Mostrar formulario para ingresar la clave
function mostrarLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
}

// Verificar clave ingresada por el docente
function verificarClave() {
  let claveIngresada = document.getElementById("clave").value;
  if (claveIngresada === claveActual) {
    alert("🔓 Acceso concedido. Bienvenido/a docente.");
    // Aquí podrías redirigir o mostrar contenido especial
    window.location.href = "docente.html"; // Este archivo lo creamos luego
  } else {
    alert("❌ Clave incorrecta. Intenta nuevamente.");
  }
}
