(function() {
'use strict';

angular
    .module('taskManager', [])
    .controller('taskCtrl', taskCtrl);

    taskCtrl.inject = ['Animal'];
    function taskCtrl(Animal) {
        var ctrl = this;

        ctrl.animalsAll = { name: 'All/None', isCheckAll: false };

        ctrl.animals = [
            new Animal({id: 2, name: 'Cat', isCheck: false }),
            new Animal({id: 3, name: 'Dog', isCheck: false }),
            new Animal({id: 4, name: 'Fish', isCheck: false })
        ];

        ctrl.checkedAll = function () { 
            ctrl.animalsAll.isCheckAll = !ctrl.animalsAll.isCheckAll;

            ctrl.animals.forEach(function (item) {
                ctrl.animalsAll.isCheckAll ? item.isCheck = true : item.isCheck = false;
            })
        }

        ctrl.checked = function (animal) {
            animal.isCheck = !animal.isCheck;

            var count = 0;
            for (var i = 0; i < ctrl.animals.length; i++) {
                if (ctrl.animals[i].isCheck) count++;
                if (count === ctrl.animals.length) {
                    ctrl.animalsAll.isCheckAll = true;
                } else if (count < ctrl.animals.length) {
                    ctrl.animalsAll.isCheckAll = false;
                }
            }
        }

    }
})();