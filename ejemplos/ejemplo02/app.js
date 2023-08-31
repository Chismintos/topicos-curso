const button = document.querySelector('.button button');

function handleEvent(e) {
  e.preventDefault();

  const userName = document.getElementById('name').value;
  const userPass = document.getElementById('pass').value;

  const existingMessages = document.querySelectorAll('p'); // Seleccionar todos los elementos <p>

  // Remover los mensajes existentes
  existingMessages.forEach(message => {
    message.remove();
  });

  // Verificar y mostrar el mensaje apropiado
  if (userName === '' || userPass === '') {
    const p1 = document.createElement('p');
    p1.innerHTML = 'Por favor, completa ambos campos.';
    document.body.appendChild(p1);

  } else if (userPass.length < 6) {
    const p1 = document.createElement('p');
    p1.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
    document.body.appendChild(p1);
    
  } else {
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    p1.innerHTML = `Nombre de usuario: ${userName}`;
    p2.innerHTML = `Contraseña de usuario: ${userPass}`;
    document.body.appendChild(p1);
    document.body.appendChild(p2);
  }
}

button.addEventListener('click', handleEvent, false);
