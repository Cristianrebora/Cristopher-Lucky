 function showLoginPopup() {
  const loginPopup = document.getElementById("loginPopup");
  loginPopup.style.display = "block";
 }

//  Función para ocultar el pop-up de inicio de sesión
 function hideLoginPopup() {
   const loginPopup = document.getElementById("loginPopup");
   loginPopup.style.display = "none";
 }

//  Función para mostrar el pop-up de crear cuenta
 function showCreateAccountPopup() {
   const createAccountPopup = document.getElementById("createAccountPopup");
   createAccountPopup.style.display = "block";
 }

 // Función para ocultar el pop-up de crear cuenta
 function hideCreateAccountPopup() {
  const createAccountPopup = document.getElementById("createAccountPopup");
   createAccountPopup.style.display = "none";
 }
 function openPopup() {
   document.getElementById("popup").style.display = "block";
 }

 // Función para el inicio de sesión
function login(event) {
   event.preventDefault(); // Evitar que el formulario se envíe automáticamente

   // Obtener los valores de los campos de entrada
  let username = document.getElementById("username").value;
 let password = document.getElementById("password").value;

   // Validar los datos de inicio de sesión 
   if (username === "usuario" && password === "contraseña") {
     alert ("Inicio de sesión exitoso");
    hideLoginPopup();
   
  } else {
    alert ("Nombre de usuario o contraseña incorrectos");
    // Mostrar un mensaje de error 
   }
 }
 function closePopup() {
   document.getElementById("Popup").style.display = "none";
 }

 // Asignar la función al botón de inicio de sesión
var loginBtn = document.getElementById("loginBtn");
 loginBtn.addEventListener("click", showLoginPopup);

// Asignar la función al botón de crear cuenta
var createAccountBtn = document.getElementById("createAccountBtn");
 createAccountBtn.addEventListener("click", showCreateAccountPopup);

 function closePopup() {
  document.getElementByclass("close").style.display = "none";
 }
 const users = {};
 function createAccountBtn() {
  const username = prompt("Ingrese un nombre de usuario:");
   const password = prompt("Ingrese una contraseña:");

   if (username && password) {
     if (users[usuario]) {
    alert("El nombre de usuario ya existe. Por favor, elija otro.");
    } else {
      users[usuarioNuevo] = { password: contraseñaNueva };
       alert("Cuenta creada exitosamente");
     }
   } else {
     alert("Debe proporcionar un nombre de usuario y una contraseña válida.");
   }
 }

 var loginBtn = document.getElementById("loginBtn");
 loginBtn.addEventListener("click", showLoginPopup);

// Asignar la función de inicio de sesión al formulario dentro del pop-up de inicio de sesión
 var loginForm = document.querySelector("#loginPopup form");
 loginForm.addEventListener("submit", login);
  function closePopup() {
  document.getElementByclass("close").style.display = "none";
 }
 