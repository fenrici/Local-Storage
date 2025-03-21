![logotipo de The Bridge](https://user-images.githubusercontent.com/27650532/77754601-e8365180-702b-11ea-8bed-5bc14a43f869.png "logotipo de The Bridge")

# [Bootcamp Web Developer Full Stack](https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer/)

### JS, ES6, Node.js, Frontend, Backend, Express, React, MERN, testing, DevOps

## Clase 4

**HTML5: Web Storage**

Web Storage es la nueva caracteristica que traen los navegadores actuales gracias a HTML5 para guardar información en el lado del cliente.

La información la guardamos al igual en pares clave-valor. Todo lo guardado resulta ser una cadena y la información es persistente sólo el lado del cliente.

Uso y limitaciones:

- 5-10Mb según navegador
- Almacenamiento local (lectura/escritura cliente)
- Sin caducidad
- Funcionamiento clave/valor
- Solo se permite el almacenamiento de cadenas de texto.

**Local Storage vs Session Storage**

- Local Storage no tiene fecha de expiración
- Session Storage solo será válida para la ventana actual en la que estamos navegando y solo son accesibles para el dominio actual.
- La información de ambas puede ser eliminada si se limpia la información guardada en el navegador.

Recursos

- [MDN | API_de_almacenamiento_web](https://developer.mozilla.org/es/docs/Web/API/API_de_almacenamiento_web)
- [html-5-diferencias-y-ejemplos-entre-local-storage-y-session-storage](https://anexsoft.com/html-5-diferencias-y-ejemplos-entre-local-storage-y-session-storage)
- [que-es-y-como-utilizar-localstorage-y-sessionstorage](https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage)
- [LocalStorage, sessionStorage](https://javascript.info/localstorage)
- [storing_and_retrieving_an_array_from_local_storage](https://www.kirupa.com/html5/storing_and_retrieving_an_array_from_local_storage.htm)

**Guardar datos**

```javascript
localStorage.setItem("name", "Alejandro"); // op1
localStorage.surname = "Reyes"; // op2
```

**Leer datos**

```javascript
let firstName = localStorage.getItem("name");
let lastName = localStorage.surname;
console.log(`Hola, mi nombre es ${firstName} ${lastName}`);
```

**eliminar datos**
Se borra por clave

```javascript
localStorage.removeItem("surname");
```

**borrar todo**

```javascript
localStorage.clear();
```

**Leer todo lo que hay en local Storage**

```javascript
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  alert(`${key}: ${localStorage.getItem(key)}`);
}
```

**Leer/escribir un objeto de LocalStorage**

usar JSON.stringify() y JSON.parse()

- [MDN | JSON.stringify()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify)
- [MDN | JSON.parse()](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/parse)

```javascript
//Escribir
localStorage.setItem(
  "user",
  JSON.stringify({
    username: "Alejandro",
    api_key: "abc123xyz789",
  })
);
//Leer
var user = JSON.parse(localStorage.getItem("user"));
```

**Leer/escribir un array de LocalStorage**

```javascript
var movies = [
  "Reservoir Dogs",
  "Pulp Fiction",
  "Jackie Brown",
  "Kill Bill",
  "Death Proof",
  "Inglourious Basterds",
];
//Escribir
localStorage.setItem("quentinTarantino", JSON.stringify(movies));

//Leer
var retrievedData = localStorage.getItem("quentinTarantino");
```

**Añadir elementos a un array que ya está creado en LocalStorage**

```javascript
let bootcamps = ["fswd", "ux", "data", "ciber"];
localStorage.setItem("bootcamps", JSON.stringify(bootcamps));

let nuevoBootcamp = JSON.parse(localStorage.getItem("bootcamps"));

nuevoBootcamp.push("marketing");
localStorage.setItem("bootcamps", JSON.stringify(nuevoBootcamp));
```

### Ejercicios

#### 1. Formulario de contacto - Local Storage

- Crear un formulario de contacto con los siguientes campos:
  - Nombre
  - Email
  - Mensaje
  - URL imagen
- Guardar en Local Storage los datos de contacto enviados de cada usuario
- Mostrar los datos de los contactos guardados en el DOM
- Usa `JSON.parse()` y `JSON.stringify()` para guardar muchos datos usando la misma clave
- Crea botón para borrar todos los contactos guardados en Local Storage
- Crea botón para borrar un contacto en concreto de Local Storage.

**NOTA IMPORTANTE:** La estructura de datos de usuarios consistirá en un array de objetos [{..},{..},{..}...{..}] almacenado en Local Storage

**NOTA:** Guardar todos los usuarios en clave **usuarios** en Local Storage 

Ejemplo del array de objetos almacenado en Local Storage en la clave **usuarios**
```js
[
  {
    nombre: "John Doe",
    email: "johndoe@example.com",
    mensaje: "Hello, how are you?",
    urlImagen: "https://example.com/johndoe.jpg",
  },
  {
    nombre: "Jane Smith",
    email: "janesmith@example.com",
    mensaje: "Nice to meet you!",
    urlImagen: "https://example.com/janesmith.jpg",
  },
];
```
