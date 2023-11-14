/*const url = 'https://fakestoreapi.com/products/'
fetch(url)
.then(res=>res.json()) // devuelve una promesa
.then(json=>console.log(json)) //devuelve otra promesa*/

//otra opcion es renderizarlo atraves de un metodo
const producList = document.getElementById("productList");

const url1 = "https://fakestoreapi.com/products";
fetch(url1)
.then(res => res.json()) // devuelve una promesa
.then(data => render(data)); //devuelve otra promesa

function render(data) {
for (product of data) {
    const item = document.createElement("li");
    item.textContent = `${product.title} - ${product.price}`;
    producList.appendChild(item);


}
}

// Este código utiliza

// Seleccione un elemento del DOM:

// const producList = document.getElementById("productList");
// Selecciona un elemento del DOM con el id "productList".<ul>) en tu HTML donde planeas mostrar
// Definir la URL de la API:


// const url1 = "https://fakestoreapi.com/products";
// Establece la URL de la API
// Realizar una solicitud a la API utilizando fetch:


// fetch(url1)
//   .then(res => res.json()) // devuelve una promesa
//   .then(data => render(data)); // devuelve otra promesa
// Utiliza la función fetchpara realizar una solicitud a la URL de la API.
// La función fetchdevuelve una promesa que resuelve en la respuesta HTTP
// Luego, `res.json()convierte
// Finalmente, se encadena otro .thenpara manejar los datos obtenidos y llama a la función rendercon esos datos.
// Renderizar los datos en el DOM:

// function render(data) {
//   for (product of data) {
//     const item = document.createElement("li");
//     item.textContent = `${product.title} - ${product.price}`;
//     producList.appendChild(item);
//   }
// }
// La función rendertoma los datos de productos y los itera utilizando un bucle `for...of.
// Crea un nuevo elemento de lista ( <li>) para cada producto.
// Establece el contenido del elemento de lista con el título y el precio del producto.
// Agrega el elemento de lista al elemento con el id "productList" en el DOM.
