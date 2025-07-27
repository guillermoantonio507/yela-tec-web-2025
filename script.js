
// ----------------------
// Variables y estados
// ----------------------
const claveCorrecta = "docente.YELA.TEC.2025";

let idioma = "es"; // por defecto español
let reconocimiento;
let escuchando = false;

// ----------------------
// Funciones menú
// ----------------------

function mostrarLogin() {
  ocultarTodasSecciones();
  document.getElementById("login").style.display = "block";
}

function modoEstudiante() {
  ocultarTodasSecciones();
  document.getElementById("modoEstudiante").style.display = "block";
  alert(idioma === "es"
    ? "Modo estudiante en desarrollo, pronto disponible."
    : "Student mode under development, coming soon."
  );
}

function cambiarIdioma() {
  idioma = (idioma === "es") ? "en" : "es";
  alert(idioma === "es"
    ? "Idioma cambiado a Español"
    : "Language switched to English"
  );
}

function mostrarEntradaTexto() {
  ocultarTodasSecciones();
  document.getElementById("entradaTexto").style.display = "block";
}

function ocultarTodasSecciones() {
  const secciones = ["login", "entradaTexto", "panelDocente", "modoEstudiante"];
  secciones.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.style.display = "none";
  });
}

// ----------------------
// Funciones acceso docente
// ----------------------

function verificarClave() {
  const clave = document.getElementById("clave").value.trim();
  if (clave === claveCorrecta) {
    alert(idioma === "es" ? "Acceso concedido. Bienvenido docente." : "Access granted. Welcome teacher.");
    ocultarTodasSecciones();
    document.getElementById("panelDocente").style.display = "block";
  } else {
    alert(idioma === "es" ? "Clave incorrecta. Intenta de nuevo." : "Wrong password. Try again.");
  }
}

// ----------------------
// Reconocimiento de voz
// ----------------------

try {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  reconocimiento = new SpeechRecognition();
  reconocimiento.lang = idioma === "es" ? "es-ES" : "en-US";
  reconocimiento.continuous = false;

  reconocimiento.onresult = (event) => {
    const texto = event.results[0][0].transcript;
    const resultado = document.getElementById("resultadoVoz");
    resultado.textContent = (idioma === "es" ? "🎤 Tú dijiste: " : "🎤 You said: ") + texto;
  };

  reconocimiento.onerror = (event) => {
    const resultado = document.getElementById("resultadoVoz");
    resultado.textContent = (idioma === "es"
      ? "❌ Error al escuchar. Intenta de nuevo."
      : "❌ Listening error. Try again.");
  };
} catch (e) {
  alert(idioma === "es"
    ? "❗ Reconocimiento de voz no soportado en este navegador."
    : "❗ Speech recognition not supported in this browser.");
}

function activarMicrofono() {
  if (!reconocimiento) {
    alert(idioma === "es"
      ? "Este navegador no soporta reconocimiento de voz."
      : "This browser does not support speech recognition.");
    return;
  }
  if (escuchando) {
    reconocimiento.stop();
    escuchando = false;
    document.getElementById("resultadoVoz").textContent = idioma === "es" ? "🎧 Micrófono detenido." : "🎧 Microphone stopped.";
  } else {
    reconocimiento.lang = idioma === "es" ? "es-ES" : "en-US";
    reconocimiento.start();
    escuchando = true;
    document.getElementById("resultadoVoz").textContent = idioma === "es" ? "🎧 Escuchando..." : "🎧 Listening...";
  }
}

// ----------------------
// Procesar texto entrada
// ----------------------

function procesarTexto() {
  const texto = document.getElementById("textoEntrada").value.trim();
  if (!texto) {
    alert(idioma === "es" ? "Por favor escribe algo." : "Please write something.");
    return;
  }
  alert(idioma === "es"
    ? `Has escrito: "${texto}"`
    : `You wrote: "${texto}"`);
  document.getElementById("textoEntrada").value = "";
}
