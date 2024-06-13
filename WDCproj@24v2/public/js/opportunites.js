var vueInst = new Vue({
    el: '#app',
    data: {
        isLoggedIn: false,
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
        loadData() {
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
    },
    beforeMount() {
        this.logged(),
        this.loadData()
    }
});