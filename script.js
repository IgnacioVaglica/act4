document.getElementById('Miform').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById('nombreUsuario').value.trim();
    const email = document.getElementById('email').value.trim();
    const edad = document.getElementById('edad').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;


    if (nombreUsuario.length < 5) {
        alert('El usuario debe tener al menos 5 caracteres');
        return;
    }

   
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert('Email inválido');
        return;
    }

    if (edad < 18 || edad > 60) {
        alert('La edad debe estar entre 18 y 60 años');
        return;
    }


    if (pais === '') {
        alert('Debe seleccionar un país');
        return;
    }

    if (!terminos) {
        alert('Debe aceptar los términos y condiciones');
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