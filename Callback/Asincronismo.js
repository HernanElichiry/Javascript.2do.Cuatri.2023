"use strict";
/* En JavaScript las funciones son "first class citizens". Por lo tanto, podemos pasarle a una función
otra función como argumento. Por definición un callback es una función que se pasa a otra función como un argumento para ejecutar más tarde.

Lo siguiente define una función filter() que acepta un arreglo de números y retorna un nuevo arreglo con los números impares.
*/

const numbersArr = [-3, -10, 0, 2, 4, 5, 6, 9, 76, 29, 43];

/**
 *
 * @param {*} numbers array
 * @returns array de num impares
 */

function filter(numbers) {
  const oddNumbers = [];
  for (const number of numbers) {
    if (number % 2 !== 0) oddNumbers.push(number);
  }
  return oddNumbers;
}
console.log(filter(numbersArr));

/* Si quisiéramos retornar un arreglo con los números pares necesitaríamos modificar la función, pero esto no la hace muy versátil. Para hacer la función filter reutilizable, más flexible podríamos:
1- extraer la lógica del bloque if y envolverla en una función separada.

*/

/**
 * @param {*} number
 * @returns boolean (true si es impar)
 */
function isOdd(number) {
  return number % 2 !== 0;
}
function isEven(number) {
  return number % 2 === 0;
}
function positive(number) {
  return number > 0;
}

/**
 *
 * @param {*} numbers array
 * @param function (callback que retorna true o false)
 * @returns array de num ???
 */
function filterB(numbers, cb) {
  const result = [];
  for (const number of numbers) {
    if (cb(number)) result.push(number);
  }
  return result;
}
console.log(filterB(numbersArr, isOdd));
console.log(filterB(numbersArr, isEven));
console.log(filterB(numbersArr, positive));

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return "Can't divide by zero";
  return a / b;
};

function calc(a, b, cb) {
  return cb(a, b);
}

console.log(calc(50, 5, sum));
console.log(calc(50, 5, subtract));
console.log(calc(10, -7, divide));
console.log(calc(10, 0, divide));
console.log(calc(21, 2, multiply));






/*ASYNCHRONOUS CALLBACKS - CALLBACKS ASINCRÓNICOS 
Un callback asincrónico es ejecutado después de la ejecución de la función de orden superior que invoca a dicho callback.
Asincronismo significa que si JavaScript tiene que esperar a que una operación finalice, ejecutará el resto del código mientras espera esa conclusión.
Supongamos que necesitamos desarrollar un script que descargue una foto de un servidor remoto y la procese después de que la descarga finalice (obvio chango, no la va a procesar si no la tiene 😅)
*/

function download(url) {
  setTimeout(() => {
    console.log(`\nDescargando ${url} ...`);
    pic = url;
  }, 2000);
}

function process(pic) {
  console.log(`\nProcesando imagen: ${pic} ...`);
}

const url = "https://en.wikipedia.org/Day_of_the_Tentacle_artwork.jpg";
let pic;

// download(url);
// process(pic);

/* Problema, no puedo procesar una imagen que aún no se ha descargado. Como la función download tiene una demora, la función process se ejecuta sin recibir realmente la imagen que viene de la descarga... porque todavía no llegó
 */

function downloadB(url, success, failure) {
  setTimeout(() => {
    console.log(`\nDescargando ${url} ...`);
    !url ? failure(url) : success(url);
  }, 2000);
}

downloadB(
  "",
  url => console.log(`Procesando imagen: ${url} ...`),
  url => console.log(`La url '${url}' no es válida`)
);

function success() {}

/*callback hell*/