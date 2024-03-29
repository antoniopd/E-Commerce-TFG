// Especial cuenta atrás (Special Countdown)
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
    let futureDate = new Date("24 jun 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60 / 24) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000) // 1000 = 1segundo


// Scroll Volver arriva (back to top)
function scrollTopBack(){ // Funcion para volver arriba de la pagina con el boton de scroll up
    let scrollTopButton = document.querySelector("#scrollUp");
    window.onscroll = function (){
        var scroll = document.documentElement.scrollTop;
        if (scroll >= 250) {
            scrollTopButton.classList.add('scrollActive');
        }else{
            scrollTopButton.classList.remove('scrollActive');
        }
    }
}
scrollTopBack(); // Llamo a la funcion para que se ejecute al cargar la pagina


// Navegar dentro de la pagina (nav hide) 
let navBar = document.querySelectorAll('.nav-link'); // selecciono todos los elementos con la clase nav-link y los guardo en una variable llamada navBar 
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

