
/**
 * Popup para logearse
 */

function mostrarPopup() {
    var overlay = document.createElement('div');
    overlay.classList.add('overlay');

    var popup = document.createElement('div');
    popup.classList.add('popup');

    var usernameLabel = document.createElement('label');
    usernameLabel.textContent = "Nombre de usuario: ";
    var usernameInput = document.createElement('input');
    usernameInput.type = 'text';

    var passwordLabel = document.createElement('label');
    passwordLabel.textContent = "Contraseña: ";
    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';

    var submitButton = document.createElement('button');
    submitButton.textContent = "Iniciar sesión";
    submitButton.addEventListener('click', function() {
      var username = usernameInput.value;
      var password = passwordInput.value;

    
      if (username === "" && password === "") {
        alert("Inicio de sesión exitoso");
      } else {
        alert("Credenciales inválidas"); 
      }

      overlay.remove();
    });

    popup.appendChild(usernameLabel);
    popup.appendChild(usernameInput);
    popup.appendChild(document.createElement('br'));
    popup.appendChild(passwordLabel);
    popup.appendChild(passwordInput);
    popup.appendChild(document.createElement('br'));
    popup.appendChild(submitButton);

    overlay.appendChild(popup);

    document.body.appendChild(overlay);
  }

 
  
