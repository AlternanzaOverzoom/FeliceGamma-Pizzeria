function Login () {
  var username = document.getElementById("uname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("psw").value;
  var userLoggedin = "true";

  if(username == localStorage.getItem("username") 
  && email == localStorage.getItem("email") 
  && password == localStorage.getItem("password")){
    localStorage.setItem("userLoggedIn", userLoggedin)
    window.location.replace("index.html");
  } else if (username != localStorage.getItem("username") 
  && email != localStorage.getItem("email")) {
    var error=document.getElementById("error-message");
    error.style="color: red";
    error.innerHTML="Utente inesistente!";
  } else {
    var error=document.getElementById("error-message");
    error.style="color: red";
    error.innerHTML="Ricontrolla i dati inseriti!";
  }
return false;
}

function Signin(){
  var username = document.getElementById("uname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("psw").value;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  window.location.replace("LogInPage.html");
  return false;
}

function showPsw() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }