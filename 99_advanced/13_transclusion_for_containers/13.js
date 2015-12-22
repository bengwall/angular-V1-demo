var app = angular.module("app", []);

app.controller("AppCtrl", function () {
    var app = this;
    app.message = "I'm going down to cow town";

    app.sayHello = function () {
        alert("hello");
    }
});

app.directive("bcComponent", function () {
    return {
        restrict: "E",
        scope: {
            message: "=",
            string: "@",
            hook: "&"
        },
        template: "<div ng-click='hook()'>{{message}} ||| {{string}}</div>"
    }
});

app.directive("bcContainer", function () {
    return {
        restrict: "E",
        transclude: true,
        template: "<div class='well' ng-transclude=''></div>"
    }
})