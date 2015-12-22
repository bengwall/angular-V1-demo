angular.module("demo",[])

.controller("AppCtrl", function () {
    var app = this;
    //app.people = ["Jay", "Wally", "Barry"];
    app.people = [
        {name:"Jay", age:30},
        {name:"Wally", age:20},
        {name:"Barry", age:10}
    ]
});