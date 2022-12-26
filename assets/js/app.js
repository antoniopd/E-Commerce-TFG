// Creo la constante contenedorProductos y selecciono el id del div donde quiero pintar los productos
const contenedorProductos = document.getElementById('contenedor-productos');


const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')


let carrito = [] // Array de carrito para almacenar los productos

// Para almacenar los datos en localStorage y no perder los items de carrito
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('carrito')) {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
  }
})
// Añado el localStorage.clear() para borrar el almacenamiento local al apretar el botón de vaciar carrito
botonVaciar.addEventListener('click', () => {
  carrito.length = 0
  actualizarCarrito()
  localStorage.clear()
})

// ***  PRODUCTOS ***
// Hago un forEach del array del stock de los productos y los guardo en (producto)
stockProductos.forEach((producto) => {
  const div = document.createElement('div')// creo elemento div
  div.classList.add('col-sm-6')// le agrego clase al elemento div
 // Con innerHTML pinto el html dentro de la constante que declaré de la sección de productos.
 // he quitado el href de a 
    div.innerHTML = `      
      <a class="d-block text-center mb-4">
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
            <p class="mb-0 amount">${producto.precio}€&nbsp;&nbsp;<del>${producto.descuento}€</del$></p>
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
      `
      contenedorProductos.appendChild(div)

    const boton = document.getElementById(`add_to_card${producto.id}`)

    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id)
  }) 
})


// Arrow Function para agregar productos al carrito
const agregarAlCarrito = (prodId) => {
  const existe = carrito.some(prod => prod.id === prodId)

  if (existe) { // Si el producto existe en el carrito, solo actualizo la cantidad del producto
    const prod = carrito.map(prod =>{
      if (prod.id === prodId) {
        prod.cantidad++
      }
    })
  } else {  // Si el producto no existe en el carrito, lo agrego al carrito con cantidad 1 
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)
  }
    actualizarCarrito()    
   
}

const eliminarDelCarrito = (prodId) => { // Arrow Function para eliminar productos del carrito
  const item = carrito.find((prod) => prod.id === prodId)

  const indice = carrito.indexOf(item) // Busco el índice del producto en el array carrito

  carrito.splice(indice, 1) // Elimino el producto del carrito con el método splice

  actualizarCarrito()

  console.log(carrito)
}



const actualizarCarrito = () => {

  contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => { // Recorro el array carrito y pinto los productos en el carrito con innerHTML 
        const div = document.createElement('div')
        div.className = ('productoEnCarrito') // le agrego clase al elemento div para darle estilos en css 
        div.innerHTML = ` 
        <img class="imag" src=${prod.img[0]} alt="productos" />
        <p>${prod.nombre}</p>
        <p>Precio: ${prod.precio}€</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="ti-trash"></i></button>
        `
        contenedorCarrito.appendChild(div) // Agrego el div al contenedor del carrito en el html  

        localStorage.setItem('carrito', JSON.stringify(carrito)) // Guardo el carrito en localStorage para no perder los items del carrito al recargar la página 

    })

    contadorCarrito.innerText = carrito.length // Actualizo el contador del carrito con el número de productos que hay en el carrito 

    console.log(carrito)
    
  //  Del precio total lo fijamos a solo dos decimales con .toFixed(2)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0).toFixed(2)
}

