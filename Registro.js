const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Detiene el envío del formulario por defecto

  const username = registerForm.elements['username'].value;
  const password = registerForm.elements['password'].value;

  // Validar los datos del formulario
  if (username.trim() === '' || password.trim() === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Guardar los datos del usuario en la base de datos
  const user = {
    username,
    password
  };

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Usuario registrado exitosamente');

  // Limpiar el formulario
  registerForm.reset();
});