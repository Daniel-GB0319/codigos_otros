// Tenemos un li de productos
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

// Corrección: Se debe usar document.getElementById en lugar de document.getElementsByName
const li = document.getElementById("lista-de-productos")
const $i = document.querySelector('input');

// Función para mostrar productos
const displayProductos = (productos) => {
  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")

    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productos[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);

    d.appendChild(ti)
    d.appendChild(imagen)

    li.appendChild(d)
  }
}

// Mostrar todos los productos al cargar la página
displayProductos(productos)

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  // Limpiar la lista de productos antes de mostrar los productos filtrados
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  const productosFiltrados = filtrado(productos, texto );

  // Mostrar los productos filtrados
  displayProductos(productosFiltrados)
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}
