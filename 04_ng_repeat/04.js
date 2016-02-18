angular.module("demo",[])

.controller("AppCtrl", function () {
    var app = this;
    //app.people = ["Marc", "Jeff", "Selvi"];
    app.people = [
        {name:"Marc", age:30},
        {name:"Jeff", age:20},
        {name:"Selvi", age:10}
    ]
});