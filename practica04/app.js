const titulo = document.createElement('h1');
titulo.innerHTML = 'FUNCIONES';

const borrar = document.createElement('h1');
borrar.innerHTML = 'BORRAR ESTUDIANTES';

document.body.appendChild(titulo);
document.body.appendChild(borrar);

titulo.addEventListener('click', () => {
  for (let estudiante of estudiantes) {
    const p = document.createElement('p');
    p.innerHTML = estudiante;
    document.body.appendChild(p);
  }
});

borrar.addEventListener('click', () => {
  const p = document.querySelectorAll('p');
  console.log(p);
});