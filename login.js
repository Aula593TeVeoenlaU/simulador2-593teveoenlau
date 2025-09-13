// ===== CONFIGURACIÓN SUPABASE =====
const SUPABASE_URL = "https://mkmdtcvexqhxtsoucekf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rbWR0Y3ZleHFoeHRzb3VjZWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NzAwMzQsImV4cCI6MjA3MzM0NjAzNH0.p5IPWWjq8Qy_8tpdPxhL_NBoc9NkmtJRCWgyvTVaxeA";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let currentUser = null;

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email, password
  });

  if (error) {
    alert("Error de inicio de sesión: " + error.message);
    return;
  }

  currentUser = data.user;

  const isAdmin = email === "sebastian.neto@593teveoenlau.ec";
  let attempts = localStorage.getItem(`attempts_${email}`) || 0;

  if (!isAdmin && attempts >= 2) {
    alert("Ya alcanzaste el límite de 2 intentos.");
    return;
  }

  // Ocultar login y mostrar simulador
  document.getElementById("login-page").style.display = "none";
  document.getElementById("app-container").style.display = "block";

  // La lógica para restaurar el progreso ahora se maneja automáticamente al cargar la página en quiz.js
}

// Contar intentos al enviar el examen
function registerAttempt() {
  if (currentUser && currentUser.email !== "sebastian.neto@593teveoenlau.ec") {
    let attempts = localStorage.getItem(`attempts_${currentUser.email}`) || 0;
    attempts++;
    localStorage.setItem(`attempts_${currentUser.email}`, attempts);
  }
}