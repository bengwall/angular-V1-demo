angular.module("demo", [])

.controller("AppCtrl", function () {
    var app = this;
    app.message = "Hello";
    app.savedMessage = "";

    app.saveMessage = function () {
        app.savedMessage = app.message;
    }
});