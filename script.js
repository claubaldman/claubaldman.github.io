




// Obtener los botones
const button1 = document.getElementById('button-1');
const square1 = document.getElementById('square-1');

const button2 = document.getElementById('button-2');
const square2 = document.getElementById('square-2');

const button3 = document.getElementById('button-3');
const square3 = document.getElementById('square-3');

// Añadir un listener al evento submit de cada formulario
button1.addEventListener('submit', validatePassword);
button2.addEventListener('submit', validatePassword2);
button3.addEventListener('submit', validatePassword3);



// Función para validar la contraseña
function validatePassword(event) {
  // Obtener el formulario y el input
  const form = event.target;
  const input = form.querySelector('input');

  // Obtener el valor del input
  const password = input.value;

  // Verificar que el valor del input sea el código correcto
  if (password === "2607") {
    // Mostrar la imagen de fondo y ocultar el cuadrado
    square1.style.height = '0';
    button1.style.display = "none";
  } else {
    // Mostrar un mensaje de error
    alert('Codigo incorrecto');
  }

  // Prevenir que el formulario sea enviado
  event.preventDefault();
}

// Función para validar la contraseña
function validatePassword2(event) {
  // Obtener el formulario y el input
  const form = event.target;
  const input = form.querySelector('input');

  // Obtener el valor del input
  const password = input.value;

  // Verificar que el valor del input sea el código correcto
  if (password === "1997") {
    // Mostrar la imagen de fondo y ocultar el cuadrado
    square2.style.height = '0';
    button2.style.display = "none";
  } else {
    // Mostrar un mensaje de error
    alert('Codigo incorrecto');
  }

  // Prevenir que el formulario sea enviado
  event.preventDefault();
}

// Función para validar la contraseña
function validatePassword3(event) {
  // Obtener el formulario y el input
  const form = event.target;
  const input = form.querySelector('input');

  // Obtener el valor del input
  const password = input.value;

  // Verificar que el valor del input sea el código correcto
  if (password === "0373") {
    // Mostrar la imagen de fondo y ocultar el cuadrado
    square3.style.height = '0';
    button3.style.display = "none";
  } else {
    // Mostrar un mensaje de error
    alert('Codigo incorrecto');
  }

  // Prevenir que el formulario sea enviado
  event.preventDefault();
}


