var app = angular.module("app", []);

app.controller("AppCtrl", function () {
    var app = this;
    app.message = "App says hi";
});

app.controller("AdminCtrl", function () {
    var admin = this;
    admin.message = "The admin also says hi";
});

app.controller("DashboardCtrl", function () {
    var dash = this;
    dash.message = "The dash says hi too";
});