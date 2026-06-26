document.getElementById('Miform').addEventListener('submit', function(event) {

    event.preventDefault();

    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = '';

    const nombreUsuario = document.getElementById('nombreUsuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;

    if (nombreUsuario.length < 5) {
        mensajeError.textContent = 'El usuario debe tener al menos 5 caracteres.';
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        mensajeError.textContent = 'Debe ingresar un email válido.';
        return;
    }

    if (edad < 18 || edad > 60) {
        mensajeError.textContent = 'La edad debe estar entre 18 y 60 años.';
        return;
    }

    if (pais === '') {
        mensajeError.textContent = 'Debe seleccionar un país.';
        return;
    }

    if (!terminos) {
        mensajeError.textContent = 'Debe aceptar los términos y condiciones.';
        return;
    }

    console.log(`Usuario: ${nombreUsuario}`);
    console.log(`Email: ${email}`);
    console.log(`Edad: ${edad}`);
    console.log(`País: ${pais}`);
    console.log('TODO CORRECTO');

    window.location.href =
        `resultado.html?nombre=${encodeURIComponent(nombreUsuario)}` +
        `&email=${encodeURIComponent(email)}` +
        `&edad=${encodeURIComponent(edad)}` +
        `&pais=${encodeURIComponent(pais)}`;
});