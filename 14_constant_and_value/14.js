var app = angular.module("app", []);

app.constant("DAY", 24);

app.value("vacation", false);

app.controller("AppCtrl", function (DAY, vacation) {
    var app = this;

    app.day = DAY;
    app.vacation = vacation;
});