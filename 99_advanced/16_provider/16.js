var app = angular.module("app", []);

app.constant("VERSION", "1.2.8");

app.provider("framework", function () {
    var whichVersion;

    this.setVersion = function (version) {
        whichVersion = version;
    };


    this.$get = function () {
        return {
            title: "Angular " + whichVersion
        }
    }
});


app.config(function (frameworkProvider, VERSION) {
    frameworkProvider.setVersion(VERSION);
});


app.controller("AppCtrl", function (framework) {
    var app = this;

    app.framework = framework.title;
});