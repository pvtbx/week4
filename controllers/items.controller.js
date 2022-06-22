(function() {
    'use strict';

    angular.module('MenuApp').controller('itemsController', itemsController);

    itemsController.$inject = ['$stateParams', 'MenuDataService', 'items'];

    function itemsController($stateParams, MenuDataService, items) {
        var controller = this;
        controller.items = items;
        controller.categoryName = $stateParams.categoryName;
    }
})();
