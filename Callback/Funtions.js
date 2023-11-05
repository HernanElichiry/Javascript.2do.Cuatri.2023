const { callbackify } = require("util")


/*En JavaScript, un callback es una función que se pasa como argumento a otra función
 y se ejecuta después de que esa función haya completado su operación. 
 Los callbacks son comunes en situaciones asincrónicas, como peticiones de red, 
 operaciones de lectura/escritura de archivos, eventos de temporizadores, etc. 
 Los callbacks permiten manejar la lógica después de que se haya completado una tarea asincrónica.

Aquí tienes un ejemplo simple de un callback en JavaScript:*/

/*Los callbacks son útiles cuando trabajas con eventos, peticiones AJAX, 
manipulación de archivos y otras operaciones asincrónicas en JavaScript. 
También son fundamentales en el desarrollo de aplicaciones web para garantizar que ciertas acciones se realicen solo después de que se complete una operación asincrónica,
 como cargar datos de un servidor o interactuar con una base de datos.

Sin embargo, el anidamiento excesivo de callbacks puede llevar a un código difícil de leer y mantener.
 Para abordar este problema, se han desarrollado conceptos como Promesas y async/await en JavaScript, 
 que proporcionan un enfoque más claro y estructurado para manejar operaciones asincrónicas.*/

 function realizarOperacion(a, b, Callback) {
    const resultado = Callback(a, b);
    console.log("El resultado de la operación es: " + resultado);
  }
  
  function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  
  function division(a, b) {
    return a / b;
  }
  
  realizarOperacion(5, 3, suma); // Suma
  realizarOperacion(5, 3, resta); // Resta
  realizarOperacion(5, 3, multiplicacion); // Multiplicación
  realizarOperacion(6, 2, division); // División

  //funcion anonima:
/*  <!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de Evento con Función Anónima</title>
</head>
<body>
    <button id="miBoton">Haz clic</button>

    <script>*/
        const boton = document.getElementById("miBoton");

        // Agregar un manejador de eventos al botón usando una función anónima
        boton.addEventListener("click", function() {
            alert("¡Haz hecho clic en el botón!");
        });
   /* </script>
</body>
</html>*/