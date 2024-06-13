function createUser() {
    let xhr = new XMLHttpRequest();
    var data = {
        "fname": document.getElementById('inputFirstName').value,
        "lname": document.getElementById('inputLastName').value,
        "email": document.getElementById('inputEmail').value,
        "password": document.getElementById('inputPassword').value,
        "role": document.getElementById('inputRole').value
    }
    xhr.open("POST", 'http://localhost:8080/createuser', true);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.location.replace("http://localhost:8080/login.html");
        }
      }
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(data));
}