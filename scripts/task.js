(function () {
    'use strict';

    angular
        .module('taskManager')
        .factory('Animal', Animal);

    function Animal() {

        var Animal = function (data) {
            this.name = data.name;
            this.isCheck = data.isCheck;
            this.id = data.id;
        };

        return Animal;

    }
})();