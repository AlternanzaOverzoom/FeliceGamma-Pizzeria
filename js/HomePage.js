function redirect() {
    if(localStorage.getItem("username") == null 
    || localStorage.getItem("email") == null
    || localStorage.getItem("password") == null){
        window.location.replace("LogInPage.html");
    }
}