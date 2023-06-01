function redirect() {
    if(localStorage.getItem("userLoggedIn") == null){
        window.location.replace("LogInPage.html");
    }
}