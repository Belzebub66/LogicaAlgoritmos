
const listaDeCompras = [];  // Lista vacía

// Función para agregar un producto
function agregarProducto() {
  let producto = document.getElementById("producto").value; // Obtener el valor del input
  let cantidad = document.getElementById("cantidad").value; // Obtener el valor del input de cantidad
  if (listaDeCompras.includes(producto)) { // Verificar si el producto ya está en la lista
    console.log("El producto ya está en la lista.");
    alert("El producto ya está en la lista.");
  }else if (producto === "") { // Verificar si el input está vacío
    alert("Por favor, ingresa un producto.");
    console.log("Por favor, ingresa un producto.");
  }else {
    listaDeCompras.push(producto); // Agregar el producto a la lista
    console.log("Producto agregado: " + producto);
    mostrarLista(); // Mostrar la lista actualizada
  }
  document.getElementById("producto").value = ""; // Limpiar el input
}
// Función para mostrar la lista completa
function mostrarLista() {
  console.log("Lista de compras:");
  for (let i = 0; i < listaDeCompras.length; i++) {
    console.log("- " + listaDeCompras[i]);
  }
}

let agregarProductoBtn = document.getElementById("agregarProductoBtn");
agregarProductoBtn.addEventListener("click", agregarProducto);
/*
let mostrarListaBtn = document.getElementById("mostrarListaBtn");
mostrarListaBtn.addEventListener("click", mostrarLista);
*/
let borrarProductoBtn = document.getElementById("borrarProductoBtn");
borrarProductoBtn.addEventListener("click", eliminarProducto);
// Prueba tus funciones

/*
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");  // Este producto no debe agregarse de nuevo
*/

//mostrar la lista actualizada en listaProductos
function mostrarLista() {
  let listaCompleta = "Lista de compras:\n";
  for (let i = 0; i < listaDeCompras.length; i++) {
    listaCompleta += (i+1) + "._ " + listaDeCompras[i] + "\n";
  }
  document.getElementById("listaProductos").value = listaCompleta; // Mostrar la lista en el listaProductos
}

function eliminarProducto() {
  let producto = document.getElementById("borrarProducto").value; // Obtener el valor del input
  let index = listaDeCompras.indexOf(producto); // Buscar el índice del producto en la lista
  if (index !== -1) { // Si el producto está en la lista
    listaDeCompras.splice(index, 1); // Eliminar el producto de la lista
    console.log("Producto eliminado: " + producto);
    alert("Producto eliminado: " + producto);
  } else {
    console.log("El producto no está en la lista.");
    alert("El producto no está en la lista.");
  }
  document.getElementById("producto").value = ""; // Limpiar el input
  mostrarLista(); // Mostrar la lista actualizada
}