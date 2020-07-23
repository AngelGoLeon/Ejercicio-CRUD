'use strict'

function traerJson(datos, bodyTabla) {
    var usuarios = datos;
    var cuerpoTabla = bodyTabla
    for (let usuario of usuarios) {
        cuerpoTabla.innerHTML += `
        <tr id="Results">
            <th scope="col">
                <p class="BodyTabla">${usuario.NOMBRE}</p>
            </th>
            <th scope="col">
                <p class="BodyTabla">${usuario.CORREO}</p>
            </th>
            <th scope="col">
                <p class="BodyTabla">${usuario.TELEFONO}</p>
            </th>
        </tr>
        `
    }
}

window.addEventListener('load', function() {
    console.log("Pagina cargada");

    var bodyTabla = document.getElementById('CuerpoTabla');
    var botonTraer = document.getElementById('traer');
    var formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("submit capturado");

        let datos = new FormData(formulario);
        fetch('../PHP/registrar.php', {
                method: 'POST',
                body: datos
            })
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log("respuesta recibida");
                bodyTabla.innerHTML = '';

            })
    })

    botonTraer.addEventListener('click', function(e) {
        e.preventDefault();
        console.log("boton presionado");

        bodyTabla.innerHTML = '';

        let peticion = { "dato": 1 };
        fetch('../PHP/traerUsuarios.php', {
                method: 'POST',
                body: JSON.stringify(peticion),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(respuesta => respuesta.json())
            .then(datos => {
                console.log('Se recibio respuesta');
                console.log(datos);
                traerJson(datos, bodyTabla);
            })
    })

})