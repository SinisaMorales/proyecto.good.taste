// Array de productos personalizado
const productos = [
    {
        nombre: "Auricular AKG11 cerrado",
        precio: "$68.249",
        imagen: "../imagenes/guitarras/AXL-20058-228x282.jpg",
        categoria: "auriculares"
    },
    {
        nombre: "Micrófono Condensador Pro",
        precio: "$95.000",
        imagen: "../imagenes/guitarras/COMBO-GUITARRA-ELECTRICA-KANSAS-AMPLIFUNDA-1-23589-1-228x283.jpg",
        categoria: "microfonos"
    },
    {
        nombre: "Interfaz de Audio USB",
        precio: "$120.500",
        imagen: "../imagenes/guitarras/GUITARRA-ELECTRICA-SCHETER-OMEN-6-PUENTE-FIJO-5928-228x295.jpg",
        categoria: "interfaces"
    }
];

const contenedor = document.getElementById("product-container");
const ordenarSelect = document.getElementById("ordenar");
const filtrarSelect = document.getElementById("filtrar");
const buscarInput = document.getElementById("buscar");

function limpiarPrecio(precio) {
    return parseFloat(precio.replace(/[$.]/g, '').replace(',', '.'));
}

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

function mostrarProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(producto => {
        contenedor.appendChild(crearTarjeta(producto));
    });
}

function aplicarFiltros() {
    let lista = [...productos];
    const categoria = filtrarSelect.value;
    const busqueda = buscarInput.value.toLowerCase();
    const orden = ordenarSelect.value;

    if (categoria !== "todos") {
        lista = lista.filter(p => p.categoria === categoria);
    }

    if (busqueda !== "") {
        lista = lista.filter(p => p.nombre.toLowerCase().includes(busqueda));
    }

    if (orden === "precio-asc") {
        lista.sort((a, b) => limpiarPrecio(a.precio) - limpiarPrecio(b.precio));
    } else if (orden === "precio-desc") {
        lista.sort((a, b) => limpiarPrecio(b.precio) - limpiarPrecio(a.precio));
    } else if (orden === "nombre") {
        lista.sort((a, b) => a.nombre.localeCompare(b.nombre));
    }

    mostrarProductos(lista);
}

ordenarSelect.addEventListener("change", aplicarFiltros);
filtrarSelect.addEventListener("change", aplicarFiltros);
buscarInput.addEventListener("input", aplicarFiltros);

mostrarProductos(productos);
