var vueInst = new Vue({
    el: '#app',
    data: {
        isLoggedIn: false
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
        }
    },
    beforeMount() {
        this.logged()
    }
});