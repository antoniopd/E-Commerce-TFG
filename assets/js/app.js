const contenedorProductos = document.getElementById('products');

const contenedorCarrito = document.getElementById('carrito-contenedor');

let carrito = []

stockProductos.forEach((products) =>{
    const div = document.createElement('div')

const boton = document.getElementById(`add_to_card${products.id}`)

boton.addEventListener('click', () => {
    agregarAlCarrito(products.id)
})
    
})

const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find ((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
}



const actualizarCarrito = () => {
    carrito-forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.nombre}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)
    }) 
}