document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;
    let imagen = document.getElementById('imagen').value;

    // Obtener contactos almacenados o crear un array vacío si no hay ninguno
    let contactosGuardados = localStorage.getItem('usuarios');
    let contactos;
    if (contactosGuardados) {
        contactos = JSON.parse(contactosGuardados);
    } else {
        contactos = [];
    }

    // Crear un nuevo objeto con los datos del formulario
    let nuevoContacto = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
        imagen: imagen
    };

    // Agregar el nuevo contacto al array
    contactos.push(nuevoContacto);

    // Guardar el array actualizado en Local Storage
    localStorage.setItem('usuarios', JSON.stringify(contactos));

    // Limpiar el formulario
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
    document.getElementById('imagen').value = '';

    // Actualizar la lista de contactos en la página
    mostrarContactos();
});

// Función para mostrar los contactos guardados
function mostrarContactos() {
    let contactosGuardados = localStorage.getItem('usuarios');

    // Verificar si hay contactos guardados
    if (contactosGuardados) {
        let contactos = JSON.parse(contactosGuardados);
        let contactList = document.getElementById('contactList');
        contactList.innerHTML = '';

        // Recorrer la lista de contactos y mostrarlos en la página
        for (let i = 0; i < contactos.length; i++) {
            let contacto = contactos[i];

            // Crear un div para cada contacto
            let div = document.createElement('div');
            div.classList.add('contacto');

            // Agregar información del contacto
            div.innerHTML = '<p><strong>Nombre:</strong> ' + contacto.nombre + '</p>' +
                            '<p><strong>Email:</strong> ' + contacto.email + '</p>' +
                            '<p><strong>Mensaje:</strong> ' + contacto.mensaje + '</p>';

            // Si hay una imagen, agregarla
            if (contacto.imagen) {
                let img = document.createElement('img');
                img.src = contacto.imagen;
                img.width = 100;
                div.appendChild(img);
            }

            // Crear botón para borrar contacto
            let botonBorrar = document.createElement('button');
            botonBorrar.textContent = 'Borrar';
            botonBorrar.onclick = function() {
                borrarContacto(i);
            };
            div.appendChild(botonBorrar);

            // Agregar el div a la lista de contactos
            contactList.appendChild(div);
        }
    }
}

// Función para borrar un contacto específico
function borrarContacto(indice) {
    let contactosGuardados = localStorage.getItem('usuarios');

    if (contactosGuardados) {
        let contactos = JSON.parse(contactosGuardados);

        // Eliminar el contacto en el índice especificado
        let nuevosContactos = [];
        for (let i = 0; i < contactos.length; i++) {
            if (i !== indice) {
                nuevosContactos.push(contactos[i]);
            }
        }

        // Guardar la nueva lista en Local Storage
        localStorage.setItem('usuarios', JSON.stringify(nuevosContactos));

        // Actualizar la lista en el DOM
        mostrarContactos();
    }
}

// Función para borrar todos los contactos
function borrarTodos() {
    localStorage.removeItem('usuarios');
    mostrarContactos();
}

// Mostrar los contactos al cargar la página
mostrarContactos();

