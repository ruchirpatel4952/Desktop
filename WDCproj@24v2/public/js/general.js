function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function logOut() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'http://localhost:8080/logout', true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location.replace("http://localhost:8080/login.html");
        }
      }
    xhr.send();
}