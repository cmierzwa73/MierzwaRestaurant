(function () {
    'use strict';

    angular
        .module('app') //controller is registered with the app module
        .controller('Main', main);

    function main() {
        var vm = this;
        vm.food = 'pizza';
    }

})();
