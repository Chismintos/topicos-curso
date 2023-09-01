
const estudiantes = ['Ricardo', 'Julio', 'Daniela', 'Arlete'];
let elementosAgregados = false;

console.log(estudiantes);

const titulo = document.createElement('h1');
titulo.innerHTML = 'FUNCIONES';
titulo.classList.add('cursor-pointer'); 

const borrar = document.createElement('h1');
borrar.innerHTML = 'BORRAR ESTUDIANTES';
titulo.classList.add('cursor-pointer'); 

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
  for (let elemento of p) {
    elemento.remove();
  }
});

// Formas de recorrer un array

// FORMA CLÁSICA ITERAR
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}

// in devuelve el index
// ciclo for in para recorrer las propiedades de un objeto 
// no muy recomendado
for (let estudiante in estudiantes) {
  console.log(estudiantes[estudiante]);
}

for (let estudiante of estudiantes) {
  console.log(estudiante);
}
// Formas de escribir una función en JS ES6

// CLASSIC FUNCTION
function saludar01 () {
    console.log('hola')
}

// ARROW FUNCTION
const saludar02 = () => {
  console.log('hola');
};