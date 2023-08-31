// Obtener elementos del DOM
const inputPesos = document.getElementById('pesos');
const convertButton = document.getElementById('convertButton');
const resultadoElement = document.getElementById('resultado');

// Función para convertir pesos a dólares
function convertirPesosADolares(pesos) {
  const tipoCambio = 0.059; // Tipo de cambio pesos a dólares
  const dolares = pesos * tipoCambio;
  return dolares;
}

// Función para manejar el clic en el botón
function convertirHandler() {
  const cantidadPesos = parseFloat(inputPesos.value);

  if (!isNaN(cantidadPesos)) {
    const cantidadDolares = convertirPesosADolares(cantidadPesos);
    resultadoElement.textContent = `$${cantidadPesos} pesos son aproximadamente $${cantidadDolares.toFixed(2)} dólares.`;
  } else {
    resultadoElement.textContent = 'Por favor ingresa una cantidad válida en pesos.';
  }
}

// Asociar el manejador de clic al botón
convertButton.addEventListener('click', convertirHandler);
