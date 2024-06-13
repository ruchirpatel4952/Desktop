var vueInst = new Vue({
    el: '#app',
    data: {
        first_name: getCookie('username'),
        email: getCookie('email')
    },
    methods: {
        logged() {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://localhost:8080/islogin', true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    window.location.replace("http://localhost:8080/dashboard.html");
                }
            }
            xhr.send();
        },
        verifyUser() {
            let xhr = new XMLHttpRequest();
            var data = {
                "email": document.getElementById('inputEmail').value,
                "password": document.getElementById('inputPassword').value
            }
            xhr.open("POST", 'http://localhost:8080/verifyuser', true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    window.location.replace("http://localhost:8080/dashboard.html");
                }
              }
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(data));
        },
    },
    mounted() {
        this.logged()
    },
});