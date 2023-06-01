function redirect() {
    if(localStorage.getItem("userLoggedin") == null){
        window.location.replace("LogInPage.html");
    }
}