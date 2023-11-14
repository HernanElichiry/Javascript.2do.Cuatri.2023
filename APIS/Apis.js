// // El navegador va a enviar una request a traves de internet, la API va a recibir esa peticion y va a ir a buscar esos
// datos a la base de datos, una vez que la API tiene esa informacion por ej peliculas va a enviar esa infomacion en formato JSON
// como response (respuesta). como pido un dsto atraves del navegador? a traves de una API denominada "fetch"

// es decir, quiero pegar en el navegador informacion que esta en la base de datos//la api es un intermediario o filtro entre
//la base de datos y el navegador. el navegador se comunica con la API y api le envia la informacion//

// Una API,

// En términos más simples, una API define cómo deben interactuar las diferentes partes del software. 
// Puedes pensar en una API

// Las API pueden ser

// Acceda a Servicios Web:

// Las API permiten que una aplicación acceda a servicios web externos para obtener datos o realizar acciones.
//  Por ejemplo, una aplicación puede utilizar la API de Twitter para obtener tweets o publicar nuevos tweets.
// Integración de Sistemas:

// En un entorno empresarial, las API son fundamentales
// Desarrollo de Aplicaciones Móviles:

// Las API son esenciales en el desarrollo de aplicaciones móviles. 
// Por ejemplo, una aplicación de clima puede utilizar la
// Desarrollo de Aplicaciones Web:

// Las aplicaciones web a menudo utilizan API para integrar funcionalidades de terceros.
//  Por ejemplo, un sitio web de comercio electrónico puede usar la API de un servicio de pago para procesar transacciones.
// Acceso a Bases de Datos:

// Las API pueden proporcionar un conjunto de funciones que permiten a las aplicaciones interactuar con bases de datos de 
// manera segura y controlada.
// Desarrollo de Bibliotecas y Frameworks:

// En el desarrollo de software, las API también se utilizan para crear bibliotecas y frameworks que
// IoT (Internet de las Cosas):

// En el ámbito de IoT, las API permiten que dispositivos se comuniquen
// Las API pueden seguir diferentes estándares y protocolos, siendo HTTP y REST (Representational State Transfer) comunes 
// para servicios web. También existen API basadas en GraphQL, SOAP y otros protocolos de comunicación. 
// En la actualidad, las API juegan un papel crucial en la conectividad y la interoperabilidad en el mundo del desarrollo de software.



//COMO LE PIDO LA INFORMACION A LA API DESDE EL NAVEGADOR?? LA FORMA ACTUAL ES UTILIZANDO UNA API DEL NACEGADOR QUE SE LLAMA
//FETCH

// fecth recibe un url y un metodo segun lo que yo quiera hacer.un GET si pido informacion
// un post si quiero enviar informacion y put si quiero editar algo que ya existe o patch tambien.
// y si quiero borrarel metodo es delete

//Aquí hay una descripción básica de cómo se utiliza.fetch para hacer una solicitud a una API:

//La sintaxis básica de fetches la siguiente:

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

 // Aquí hay una breve explicación de los componentes:

// fetch(url): Inicia una solicitud a la URL especificada. Puedes incluir opciones de configuración como el método HTTP,
//  los encabezados y más.

// .then(response => response.json()): Maneja la respuesta de la solicitud. El método .json()convierte la respuesta 
// en un objeto JavaScript si la respuesta está en formato JSON. Puedes usar otros métodos como .text()
// si la respuesta es texto plano.

// .then(data => console.log(data)): Maneja los datos obtenidos después de que la respuesta se ha convertido en un formato 
// útil (como un objeto JSON). En este caso, simplemente imprime los datos en la consola.

// .catch(error => console.error('Error:', error)): Maneja errores en caso de que la solicitud no se realice correctamente.

// Un ejemplo más completo podría ser:

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


