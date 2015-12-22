var app = angular.module("app", []);

app.directive("bcDirective", function () {
    return function (scope, element, attrs) {
        scope.$watch(attrs.bcDirective, function (newVal) {
            element.append(newVal);
        })
    }
});