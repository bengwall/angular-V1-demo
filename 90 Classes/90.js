angular.module("afModelTest", ['af.orderModel'])
.controller("AppCtrl", function (OrderModel) {
    var app = this;

});

angular.module("af.orderModel", [])
.factory("OrderModel", function () {
        var customerName = "",
            orderDate = new Date();

        var setCustomerName = function(name) {
            this.customerName = name;
        };
        var getCustomerName = function() {
            return this.customerName;
        };

        return {
            setCustomerName: setCustomerName,
            getCustomerName: getCustomerName
        };
    });

var Person = Class.extend({
    init: function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dancing = false;
    },
    dance: function(){
        return this.dancing;
    },
    getFirstName: function() {
        return this.firstName;
    },
    getLastName: function() {
        return this.lastName;
    }
});

var Ninja = Person.extend({
    init: function(){
        this._super( "Ted", "Ninja" );
    },
    dance: function(){
        // Call the inherited version of dance()
        return this._super();
    },
    swingSword: function(){
        return true;
    }
});

var p = new Person("Brent","Engwall");
console.log(p.getFirstName());
console.log(p.getLastName());

var n = new Ninja();
console.log(n.getFirstName()); // => false
console.log(n.getLastName()); // => true

console.log(p instanceof Class)
console.log(p instanceof Person)
console.log(p instanceof Ninja)