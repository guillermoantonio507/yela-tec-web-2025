
// Clave secreta del docente
let claveActual = "docente.YELA.TEC.2025";

// Mostrar campo de ingreso de clave
function mostrarLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
}

// Verificar si la clave ingresada es correcta
function verificarClave() {
  let claveIngresada = document.getElementById("clave").value;
  if (claveIngresada === claveActual) {
    alert("🔓 Acceso concedido. Bienvenido/a docente.");
    // Redirigir a una sección docente (próximamente)
    // Puedes cambiar esto a una URL o mostrar más contenido
    window.location.href = "docente.html"; // Opcional
  } else {
    alert("❌ Clave incorrecta. Intenta nuevamente.");
  }
}
