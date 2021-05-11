$(document).ready(function () {

    var username = localStorage.getItem("username");
    var nationality = localStorage.getItem("nationality")

    if (username !== null){
        document.getElementById("button").innerHTML = "MENU";
    }
 });

window.onload = function () {

    var app = new Vue({
        el: '#app',
        data: {
            low: 0,
            top: 50,
            users: [],
            lenght: 1401,
        },
        mounted: function () {
            var self = this;
            $.ajax({
                url: '../php/load_ranking.php',
                method: 'POST',
                success: function (data) {
                    self.users = JSON.parse(data);

                    self.users[0]["medal"] = "assets/medal/gold.png";
                    self.users[1]["medal"] = "assets/medal/silver.png";
                    self.users[2]["medal"] = "assets/medal/bronze.png";                
                },
                error: function (error) {
                    console.log(error);
                }
            });
        },
        methods: {
            next: function(){
                this.low += 50;            
                this.top += 50;
            },
            prev: function(){
                this.low -= 50;          
                this.top -= 50;       
            },
            getLow: function(){
                if(this.low == 0) return this.low + 3;
                else return this.low;
            },
            getTop: function(){
                if(this.top > lenght) return lenght;
                else return this.top;
            },
        }
    });

}