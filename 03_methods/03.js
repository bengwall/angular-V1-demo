angular.module("demo", [])

.controller("AppCtrl", function () {
    var app = this;
    app.userName = "Megan";
    app.savedUserName = "";

    app.handleSave = function () {
        app.handleSave = app.userName;
    }
});