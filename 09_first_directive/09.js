var app = angular.module("app", []);

app.directive("bcDirective", function () {
    return function () {
        console.log("I do nothing and proud of it!");
    }
});