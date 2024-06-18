document.getElementById('forminfo').addEventListener('submit', function(event) {
    var emailField = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = 'El formato de email es incorrecto, introduce un email válido.';
        emailError.style.color = 'red';
        event.preventDefault();
    } else {
        emailError.textContent = '';
    }
});