
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  (comparationBaseUsers(username,password))? window.location = "index.html" : alert('Nombre de usuario o contraseña incorrectos');



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
  setInterval(mantenerSesionActiva(), intervalo * 1000);

});

function comparationBaseUsers(username, password) {
  let value = false;
  let ArrayUser = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < ArrayUser.length; i++) {
    if (username == ArrayUser[i].username && password == ArrayUser[i].password) {
      value=true;      
    } 
  }
  return value;
}



