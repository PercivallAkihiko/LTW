window.onload = function () {

    var app = new Vue({
        el: '#cane',
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
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

}