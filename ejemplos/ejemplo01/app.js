const titulo = document.createElement('h1');
titulo.innerText = 'Generar Número Aleatorio';

function numeroAzar() {
  const numeroAleatorio = document.createElement('p');
  numeroAleatorio.innerText = Math.floor(Math.random() * 100);
  document.body.appendChild(numeroAleatorio);
}

const boton = document.createElement('button');
boton.innerText = 'Generar Número';
boton.addEventListener('click', numeroAzar);

document.body.appendChild(boton);
