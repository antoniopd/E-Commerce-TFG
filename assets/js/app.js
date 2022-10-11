// Creo la constante contenedorProductos y selecciono el id del div donde quiero pintar los productos
const contenedorProductos = document.getElementById('contenedor-productos');


let carrito = []

// Hago un forEach del array del stock de los productos y los guardo en (producto)
stockProductos.forEach((producto) => {
// Con innerHTML pinto el html dentro de la constante que declaré de la sección de productos.
    contenedorProductos.innerHTML += `  
    <div class="col-sm-6 col-lg-4" id="1">
      <a href="#" class="d-block text-center mb-4">
        <div class="product-list">
          <div class="product-image position-relative">
            <span class="sale">Rebaja</span>
            <img
              src=${producto.img[0]}
              class="img-fluid product-image-first"
              alt="products"
            />
            <img
              src=${producto.img[1]}
              class="img-fluid product-image-secondary"
              alt="products"
            />
          </div>
          <div class="product-name pt-3">
            <h3 class="text-capitalize">${producto.desc}</h3>
            <p class="mb-0 amount">10.00€ <del>${producto.precio}€</del></p>
            <div class="py-1">
              <span class="ti-star active"></span>
              <span class="ti-star active"></span>
              <span class="ti-star active"></span>
              <span class="ti-star active"></span>
              <span class="ti-star"></span>
            </div>
            <button type="button" class="add_to_card" id="add_to_card${producto.id}">AÑADIR🛒</button>
          </div>
        </div>
      </a>
    </div>    
   
   `
})


// const boton = document.getElementById(`add_to_card${products.id}`)

// boton.addEventListener('click', () => {
//     agregarAlCarrito(products.id)
// })


// const agregarAlCarrito = (prodId) => {
//     const item = stockProductos.find((prod) => prod.id === prodId)
//     carrito.push(item)
//     actualizarCarrito()
// }



// const actualizarCarrito = () => {
//     carrito - forEach((prod) => {
//         const div = document.createElement('div')
//         div.className = ('productoEnCarrito')
//         div.innerHTML = `
//         <p>${prod.nombre}</p>
//         <p>Precio: ${prod.nombre}</p>
//         <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
//         <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
//         `
//         contenedorCarrito.appendChild(div)
//     })
// }