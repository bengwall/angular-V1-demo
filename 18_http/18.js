var app = angular.module("app", []);
app.controller("AppCtrl", function ($http) {
    var app = this;

    $http.get("https://api.github.com/users/angular/repos")
        .success(function (result) {
            app.repos = result;
        })
});