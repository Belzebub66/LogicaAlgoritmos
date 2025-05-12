let productosTienda = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];
document.getElementById("productos").value = "Lista de productos:\n" + productosTienda.map((producto, index) => `${index + 1}._ ${producto.nombre} - $${producto.precio} - ${producto.categoria}`).join("\n");

//filtrar productos por costo
const filtrarPorCosto = (productos, costo) => {
    return productos.filter(producto => producto.precio <= costo);
};

//Ordenar productos alfabeticamente
const ordenarAlfabeticamente = (productos) => {
    return productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
};

//Generar un nuevo arreglo con los nombres de los productos
const obtenerNombresProductos = (productos) => {
    return productos.map(producto => producto.nombre);
};

//Mostrar los resultados
/*
const mostrarResultados = (productos) => {
    console.log("Productos filtrados por costo (menos que 100):");
    console.log(filtrarPorCosto(productos, 100));
    console.log("Productos ordenados alfabéticamente:");
    console.log(ordenarAlfabeticamente(productos));
    console.log("Nombres de los productos:");
    console.log(obtenerNombresProductos(productos));
};
*/

//Ejecutar la función para mostrar los resultados
//mostrarResultados(productosTienda);


let nuevoProducto = {
    nombre: this.nombre,
    precio: this.precio,
    categoria: this.categoria
};

let nuevoProductoBtn = document.getElementById("btnAgregar");
nuevoProductoBtn.addEventListener("click", () => {
    const nombre = document.getElementById("producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;

    if (nombre && precio && categoria) {
        // Crear un nuevo objeto cada vez
        const nuevoProducto = {
            nombre: nombre,
            precio: precio,
            categoria: categoria
        };
        agregarProducto(productosTienda, nuevoProducto);
        console.log("Nuevo producto agregado:", nuevoProducto);
        mostrarResultados(productosTienda);
    } else {
        console.log("Por favor, completa todos los campos.");
    }
});

//Añadir un nuevo producto a la tienda
const agregarProducto = (productos, nuevoProducto) => {
    productos.push(nuevoProducto);
    console.log(`Producto ${nuevoProducto.nombre} agregado.`);
    mostrarProductos(productos);
};

//Eliminar un producto de la tienda
const eliminarProducto = (productos, nombreProducto) => {
    const index = productos.findIndex(producto => producto.nombre === nombreProducto);
    if (index !== -1) {
        productos.splice(index, 1);
        console.log(`Producto ${nombreProducto} eliminado.`);
    } else {
        console.log(`Producto ${nombreProducto} no encontrado.`);
    }
};

let eliminarProductoBtn = document.getElementById("btnEliminar");
eliminarProductoBtn.addEventListener("click", () => {
    let nombreProducto = document.getElementById("producto").value;
    eliminarProducto(productosTienda, nombreProducto);
    console.log("Producto eliminado:", nombreProducto);
    mostrarResultados(productosTienda);
});

//Mostrar productos en area productos

const mostrarProductos = (productos) => {
    let listaCompleta = "Lista de productos:\n";
    for (let i = 0; i < productos.length; i++) {
        listaCompleta += (i + 1) + "._ " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    document.getElementById("productos").value = listaCompleta; // Mostrar la lista en el textarea
}


filtrarBtn = document.getElementById("btnFiltrar");
filtrarBtn.addEventListener("click", () => {
    let costo = parseFloat(document.getElementById("costo").value);
    let productosFiltrados = filtrarPorCosto(productosTienda, costo);
    console.log("Productos filtrados por costo:", productosFiltrados);
    mostrarProductos(productosFiltrados);
});

// Ordenar productos alfabéticamente
const ordenarBtn = document.getElementById("btnOrdenar");
ordenarBtn.addEventListener("click", () => {
    let productosOrdenados = ordenarAlfabeticamente(productosTienda);
    console.log("Productos ordenados alfabéticamente:", productosOrdenados);
    mostrarProductos(productosOrdenados);
});

//Generar un nuevo arreglo con los nombres de los productos
const nombresBtn = document.getElementById("btnNombres");
nombresBtn.addEventListener("click", () => {
    let nombres = obtenerNombresProductos(productosTienda);
    console.log("Nombres de los productos:", nombres);
    document.getElementById("nuevoArreglo").value = "Nombres de los productos:\n" + nombres.join("\n");
});