document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica para validar el inicio de sesión
    // Por ejemplo, puedes verificar las credenciales en el lado del cliente
    // y mostrar un mensaje de inicio de sesión exitoso o fallido
    if (username === "usuario" && password === "contraseña") {
        document.getElementById("message").innerText = "Inicio de sesión exitoso";
        // Redirigir al usuario a otra página después de iniciar sesión
        // window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").innerText = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
});

document.getElementById("showRegister").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("registerPanel").style.display = "block";
    window.location.href = "#registerPanel";
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var regUsername = document.getElementById("regUsername").value;
    var email = document.getElementById("email").value;
    var regPassword = document.getElementById("regPassword").value;

    // Aquí puedes agregar la lógica para registrar al usuario
    // Por ejemplo, puedes enviar los datos del formulario a un servidor
    // y manejar el registro allí, luego redirigir al usuario a la página de inicio de sesión
    alert("Registrando usuario: " + regUsername + ", Correo electrónico: " + email + ", Contraseña: " + regPassword);
    // Redirigir al usuario a la sección de inicio de sesión después del registro
    window.location.href = "#loginForm";
});

