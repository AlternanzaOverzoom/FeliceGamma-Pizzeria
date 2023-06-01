function redirect() {
    if(localStorage.getItem("userLoggedin") == true){
        window.location.replace("LogInPage.html");
    }
}