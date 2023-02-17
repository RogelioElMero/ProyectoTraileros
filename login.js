

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === 'usuario' && password === 'contraseña') {
    alert('Inicio de sesión exitoso');
    window.location="index.html";
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }

  // Establecer intervalo de tiempo en segundos
const intervalo = 300000; 

// Función para mantener la sesión activa
function mantenerSesionActiva() {
  // Hacer una solicitud de AJAX al servidor para mantener la sesión viva
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'ruta/al/servidor');
  xhr.send();
}

// Establecer el intervalo de tiempo para llamar a la función mantenerSesionActiva
setInterval(mantenerSesionActiva, intervalo * 1000);

});