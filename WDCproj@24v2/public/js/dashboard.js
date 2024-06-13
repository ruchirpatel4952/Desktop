var vueInst = new Vue({
    el: '#app',
    data: {
        first_name: '',
        email: '',
        isLoggedIn: false,
        event_data: [],
        opportunity_data: []
    },
    methods: {
        logged() {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://localhost:8080/islogin', true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    vueInst.isLoggedIn = true;
                }
                else {
                    vueInst.isLoggedIn = false;
                }
            }
            xhr.send();
        },
        isLogin() {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", 'http://localhost:8080/islogin', true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status != 200) {
                    window.location.replace("http://localhost:8080/login.html");
                }
            }
            xhr.send();
        },
        loadData() {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://localhost:8080/userdata', true);
            var data = {
                "id": getCookie('id')
            }
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var res = JSON.parse(this.response);
                    console.log(res);
                    vueInst.first_name = res[0].first_name;
                    vueInst.email = res[0].email;
                }
            }
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(data));
            let nxhr = new XMLHttpRequest();
            nxhr.open("GET", 'http://localhost:8080/eventdata', true);
            nxhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var res = JSON.parse(this.response);
                    vueInst.event_data = res;
                }
            }
            nxhr.send();
            let nnxhr = new XMLHttpRequest();
            nnxhr.open("GET", 'http://localhost:8080/opportunitydata', true);
            nnxhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var res = JSON.parse(this.response);
                    vueInst.opportunity_data = res;
                }
            }
            nnxhr.send();
        },
        show_event() {
            var elem = document.querySelector('#events').style;
            elem.display = 'block';
        },
        close_event() {
            console.log('hi');
            var elem = document.querySelector('#events').style;
            elem.display = 'none';
        },
        create_event() {
            let xhr = new XMLHttpRequest();
            var data = {
                "event_title": document.getElementById('event_title').value,
                "event_description": document.getElementById('event_description').value
            }
            xhr.open("POST", 'http://localhost:8080/createevent', true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    location.reload();
                }
            }
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(data));
        },
        show_opportunity() {
            var elem = document.querySelector('#opportunities').style;
            elem.display = 'block';
        },
        close_opportunity() {
            var elem = document.querySelector('#opportunities').style;
            elem.display = 'none';
        },
        create_opportunity() {
            let xhr = new XMLHttpRequest();
            var data = {
                "opportunity_title": document.getElementById('opportunity_title').value,
                "opportunity_description": document.getElementById('opportunity_description').value
            }
            xhr.open("POST", 'http://localhost:8080/createopportunity', true);
            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    location.reload();
                }
            }
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    },
    beforeMount() {
        this.loadData()
    },
    mounted() {
        this.logged(),
            this.isLogin()
    },
});

