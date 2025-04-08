// Array de productos personalizado
const productos = [
    {
        nombre: "Auricular AKG11 cerrado",
        precio: "$68.249",
        imagen: "../imagenes/AURICULAR-AKG-K511-CERRADO-584x800.jpg"
    },
    {
        nombre: "Micrófono Condensador Pro",
        precio: "$95.000",
        imagen: "../imagenes/microfono-condensador.jpg"
    },
    {
        nombre: "Interfaz de Audio USB",
        precio: "$120.500",
        imagen: "../imagenes/interfaz-audio-usb.jpg"
    }
];

// Función para crear tarjeta de estructura
function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta__producto--secciones");

    tarjeta.innerHTML = `
    <div>
        <img src="${producto.imagen}" alt="${producto.nombre}">
    </div>
    <div class="tarjeta__texto--secciones">
        <h4>${producto.nombre}</h4>
        <p><span>${producto.precio}</span></p>
    </div>
    `;

    return tarjeta;
}

// Mostrar productos en el DOM
function mostrarProductos(lista) {
    const contenedor = document.getElementById("product-container");
    contenedor.innerHTML = ""; // Limpiar previo
    lista.forEach(producto => {
        const tarjeta = crearTarjeta(producto);
        contenedor.appendChild(tarjeta);
    });
}

// Ejecutar al cargar
mostrarProductos(productos);
