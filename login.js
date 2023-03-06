
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  //resive el valor de los inputs de login 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  //un if resumido que verifica si el usuario y contraseña coinciden en la base para dar acceso o negarlo 
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

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns boolean
 */
function comparationBaseUsers(username, password) {
  let value = false;
  //consulta al local storage el arreglo de usuarios
  let ArrayUser = JSON.parse(localStorage.getItem("users"));

  //verifia si esta el usuario y su contraseña coinciden
  for (let i = 0; i < ArrayUser.length; i++) {
    if (username == ArrayUser[i].username && password == ArrayUser[i].password) {
      value=true;      
    } 
  }
  return value;
}



