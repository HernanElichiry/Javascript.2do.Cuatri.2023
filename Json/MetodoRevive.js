// El "reviver" en JavaScript se refiere a una función opcional que se puede pasar como segundo argumento al método 
// JSON.parse() cuando estás parseando objetos JSON. 
// La función "reviver" se utiliza para controlar cómo se transforman las claves y valores de un objeto JSON durante 
// el proceso de análisis.

// La función "reviver" toma dos argumentos: la clave actual y el valor asociado con esa clave. 
// Puedes utilizar esta función para modificar o filtrar los valores durante el análisis del JSON. 
// Básicamente, la función te permite "revivir" o personalizar cómo se construye el objeto JavaScript a partir del JSON.

// Un uso común de la función "reviver" es convertir ciertos valores en instancias de clases personalizadas o modificar 
// los valores de alguna manera específica. Aquí hay un ejemplo sencillo:


// El método revive se utiliza en el contexto de la función JSON.parse. Cuando se usa en este contexto, solo recibe 
// un parámetro: value. La función revive se llama para cada par clave-valor en el objeto JSON durante el proceso de 
// análisis y se llama una vez por cada valor en el objeto JSON.

// Dado que revive se usa con JSON.parse, no necesitas preocuparte por los detalles de la clave aquí. 
// En su lugar, la función revive se encarga de decidir si el valor debe modificarse de alguna manera durante el proceso 
// de análisis.

// En tu código, Veterinary.revive se pasa como el segundo argumento a JSON.parse, por lo que se llamará automáticamente 
// con los valores en el JSON, sin necesidad de proporcionar los dos parámetros (key y value) manualmente. 
// En cada llamada a Veterinary.revive, key y value se pasan automáticamente por JSON.parse, y tu función revive decide 
// si debe procesar ese valor y cómo hacerlo.


// y como sabe cual es la key y cual el value?


// Cuando se utiliza la función JSON.parse en JavaScript para analizar un objeto JSON, 
// la función revive que proporcionas como segundo argumento se llama para cada par clave-valor en el objeto JSON. 
// La función revive recibe dos parámetros, donde el primer parámetro es key y el segundo parámetro es value.

// key: Es una cadena que representa la clave o nombre del valor en el objeto JSON.
// value: Es el valor asociado a esa clave en el objeto JSON.
// El proceso de análisis de JSON.parse se encarga de pasar estos valores automáticamente a la función revive
//  en cada llamada. La función revive tiene acceso a ambos key y value y puede decidir si desea realizar alguna 
//  acción basada en estos valores.
/*
{
    "name": "Veterinaria 1",
    "address": "Calle 123"
  }*/

//   La función revive se llamará primero con key igual a "name" y value igual a "Veterinaria 1", y luego se llamará 
//   con key igual a "address" y value igual a "Calle 123". Tu función revive puede decidir cómo procesar estos valores 
//   basándose en las claves y valores proporcionados.