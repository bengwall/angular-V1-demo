//some people prefer dots: some.other.module
//others prefer camelCase: someOtherModule
var someOtherModule = angular.module("someOtherModule", []);
someOtherModule.value("framework", {
    title: "Angular 1.2.8 (loaded from another module)"
});


var app = angular.module("app", ["someOtherModule"]);
app.controller("AppCtrl", function (framework) {
    var app = this;

    app.framework = framework;
});