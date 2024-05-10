// Seleccionamos el formulario usando su ID
var formulario = document.querySelector(".formulario")

// Esta función se ejecuta cuando el formulario se envía
formulario.onsubmit = function(e) {

  // Evitamos que la página se recargue cuando se envía el formulario
  e.preventDefault(); // Corregido de e.prevent() a e.preventDefault()
  
  // Recogemos los valores de los campos de entrada
  var nombre = formulario.elements.name.value // Modificado para ser más legible
  var edad = formulario.elements.age.value // Modificado para ser más legible
  var nacionalidad = formulario.elements.nationality.value // Modificado para ser más legible

  // Validamos los datos ingresados
  if (nombre.length === 0) {
    formulario.elements.name.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    formulario.elements.age.classList.add("error")
  }

  // Si los datos son válidos, agregamos el invitado
  if (nombre.length > 0 && edad >= 18 && edad <= 120) { // Modificado para coincidir con las validaciones
    agregarInvitado(nombre, edad, nacionalidad) // Modificado para tomar los valores como argumentos
  }
}

// Esta función crea un nuevo elemento en la lista de invitados con los detalles proporcionados
function agregarInvitado(nombre, edad, nacionalidad) { // Modificado para tomar los valores como argumentos

  // Convertimos el valor de la nacionalidad a su forma completa
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  // Creamos un nuevo elemento en la lista de invitados
  var lista = document.querySelector(".lista-de-invitados")
  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  // Creamos los elementos para mostrar los detalles del invitado
  crearElemento("Nombre", nombre, elementoLista)
  crearElemento("Edad", edad, elementoLista)
  crearElemento("Nacionalidad", nacionalidad, elementoLista)

  // Creamos un botón para eliminar el invitado
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  elementoLista.appendChild(botonBorrar);

  // Esta función se ejecuta cuando se hace clic en el botón de borrar
  botonBorrar.onclick = function() {
    this.parentNode.remove()
  }
}

// Esta función crea un nuevo elemento para mostrar un detalle del invitado
function crearElemento(descripcion, valor, contenedor) { // Modificado para tomar un contenedor como argumento
  var span = document.createElement("span")
  var input = document.createElement("input")
  var espacio = document.createElement("br")
  span.textContent = descripcion + ": "
  input.value = valor 
  input.readOnly = true; // Agregado para que el usuario no pueda modificar estos valores
  contenedor.appendChild(span) // Modificado para agregar los nuevos elementos al contenedor
  contenedor.appendChild(input) // Modificado para agregar los nuevos elementos al contenedor
  contenedor.appendChild(espacio) // Modificado para agregar los nuevos elementos al contenedor
}
