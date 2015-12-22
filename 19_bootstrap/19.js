var one = angular.module("one", ["ui.bootstrap"]);

function AccordionDemoCtrl() {
    var acc = this;
    acc.oneAtATime = true;

    acc.groups = [
        {
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        },
        {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }
    ];

    acc.items = ['Item 1', 'Item 2', 'Item 3'];

    acc.addItem = function() {
        var newItemNo = acc.items.length + 1;
        acc.items.push('Item ' + newItemNo);
    };
}