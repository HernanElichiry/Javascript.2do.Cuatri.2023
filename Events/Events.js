/*En JavaScript ES6, los eventos y los manejadores de eventos siguen siendo fundamentales para interactuar con 
elementos del DOM y agregar comportamiento interactivo a tus aplicaciones web. 
Aquí te explico cómo funcionan los eventos y los manejadores de eventos en JavaScript ES6:

Eventos:

Los eventos son acciones o sucesos que ocurren en el navegador, como hacer clic en un botón, mover el mouse, 
cargar una página, etc.
En JavaScript ES6, puedes trabajar con una amplia variedad de eventos, como click, mouseover, submit, keydown,
 load, entre otros.
Para agregar un evento a un elemento HTML, puedes utilizar el método addEventListener. 
Por ejemplo, para agregar un evento de clic a un botón con el id "myButton":


const button = document.getElementById("myButton");
button.addEventListener("click", function(event) {
  // Código que se ejecuta cuando se hace clic en el botón
});

Manejadores de Eventos:

Los manejadores de eventos son funciones que se ejecutan cuando ocurre un evento específico en un elemento HTML.
En JavaScript ES6, puedes definir manejadores de eventos de diferentes maneras, incluyendo funciones anónimas o
funciones con nombre.
Aquí hay un ejemplo de cómo definir un manejador de eventos con una función con nombre:
javascript

const button = document.getElementById("myButton");

function handleClick(event) {
  // Código que se ejecuta cuando se hace clic en el botón
}

button.addEventListener("click", handleClick);

También puedes utilizar funciones de flecha en ES6:


const button = document.getElementById("myButton");

const handleClick = (event) => {
  // Código que se ejecuta cuando se hace clic en el botón
}

button.addEventListener("click", handleClick);
Eliminar Eventos:

Puedes eliminar eventos utilizando el método removeEventListener. 
Esto es útil si deseas dejar de escuchar eventos en un elemento en particular.
Debes asegurarte de pasar la misma función de manejador que usaste para agregar el evento:

button.removeEventListener("click", handleClick);
En resumen, los eventos y los manejadores de eventos en JavaScript ES6
te permiten responder a las interacciones del usuario en tu aplicación web.
 Puedes agregar eventos a elementos HTML y definir funciones que se ejecuten cuando esos eventos ocurran, 
lo que te permite crear aplicaciones interactivas y dinámicas.*/



/*en el último ejemplo, se utiliza una arrow
 function como manejador del evento. */

const select = document.getElementById("miSelect");

select.addEventListener("change", (event) => {
  console.log("Elemento seleccionado: " + event.target.value);
});


/*laro, aquí tienes ejemplos de diferentes eventos en JavaScript:

Evento de clic en un botón:*/

const boton = document.getElementById("miBoton");

boton.addEventListener("click", () => {
  alert("Se hizo clic en el botón");
});
/*Evento de cambio en un campo de entrada:
javascript
Copy code*/
const input = document.getElementById("miInput");

input.addEventListener("change", (event) => {
  console.log("El valor cambió a: " + event.target.value);
});

/*Evento de desplazamiento (scroll) en la página:
javascript
Copy code*/
window.addEventListener("scroll", () => {
  console.log("Se ha desplazado la página");
});
/*Evento de carga completa de la página:
javascript
Copy code*/
window.addEventListener("load", () => {
  console.log("La página se ha cargado por completo");
});
/*Evento de presionar una tecla en el teclado:
javascript
Copy code*/
document.addEventListener("keydown", (event) => {
  console.log("Tecla presionada: " + event.key);
});
/*Evento de cambio de selección en un elemento <select>:
javascript
Copy code*/

//Estos son solo algunos ejemplos de eventos en JavaScript. Los eventos permiten que tu código responda a las acciones del usuario y a las interacciones en la página web. Puedes usar estos eventos como base para crear interacciones dinámicas en tu sitio web.