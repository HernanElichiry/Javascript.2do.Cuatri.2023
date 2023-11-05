// que son los NODOS? Son los elementos que nosotros conocemos en html, eje un div o una etiqueta, 
//y que nosotros podemos identificar o captar nodos en js desde el documento a traves
// de sus identificadores ej ID.

const nodo = document.getElementById
const nodo1 = document.getElementsByName
const nodo2 = document.getElementsByTagName
const nodo3 = document.getElementsByClassName
const nodo4 = document.querySelector // sirve para la clase
const nodo5 = document.querySelectorAll 

/*Diferencias:

const nodo = document.getElementById: Este selector busca un elemento en el DOM 
(Documento de Objeto de Modelo) por su atributo id. 
Debes proporcionar el ID del elemento que deseas seleccionar como argumento a getElementById,
 y solo seleccionará un único elemento con ese ID.

const nodo1 = document.getElementsByName: Este selector busca elementos en el DOM por su atributo name. 
A diferencia de getElementById, getElementsByName puede seleccionar varios elementos con el mismo nombre 
y los devuelve en una colección HTML.

const nodo2 = document.getElementsByTagName: Este selector busca elementos en el DOM por su nombre de etiqueta HTML. 
Por ejemplo, si pasas 'div' como argumento, seleccionará todos los elementos div en el documento y los devuelve en una colección HTML.

const nodo3 = document.getElementsByClassName: Este selector busca elementos en el DOM por su clase.
 Debes proporcionar el nombre de clase del elemento que deseas seleccionar como argumento a getElementsByClassName. 
 Similar a getElementsByName, puede seleccionar varios elementos con la misma clase y los devuelve en una colección HTML.

const nodo4 = document.querySelector: Este selector utiliza una sintaxis de selectores CSS para seleccionar un elemento en el DOM.
 Puede seleccionar un solo elemento que cumpla con el selector CSS proporcionado. Si hay varios elementos que coinciden con el selector, solo devolverá el primero que encuentre.

const nodo5 = document.querySelectorAll: Al igual que querySelector, este selector utiliza una sintaxis de selectores CSS para seleccionar elementos en el DOM.
 Sin embargo, a diferencia de querySelector, querySelectorAll devuelve una lista de todos los elementos que coinciden con el selector, en lugar de solo el primero.

En resumen, cada uno de estos selectores tiene un propósito específico y se utiliza para seleccionar elementos en el DOM de acuerdo a diferentes criterios,
como ID, nombre, etiqueta, clase o mediante selectores CSS.*/







