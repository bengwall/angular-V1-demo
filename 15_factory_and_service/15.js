var app = angular.module("app", []);

app.constant("DAY", 24);

app.value("vacation", true);

app.factory("job", function (vacation) {
    return {
        type:"software developer",
        vacation: vacation
    }
});

app.service("Calendar", function (DAY) {
    this.getWeek = function () {
        return DAY * 7;
    }
});


app.controller("AppCtrl", function (job, Calendar) {
    var app = this;

    app.job = job;
    app.week = Calendar.getWeek();
});