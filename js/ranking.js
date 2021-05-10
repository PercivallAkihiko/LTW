window.onload = function () {

    var app = new Vue({
        el: '#app',
        data: {
            users: []
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
        }
    });

}