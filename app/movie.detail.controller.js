(function() {
    'use strict';

    angular
        .module('app')
        .controller('detailController', detailController);

    detailController.$inject = ['movieService', '$stateParams'];

    /* @ngInject */
    function detailController(movieService, $stateParams) {
        var vm = this;
        vm.title = 'detailController';

        //activate();

        ////////////////
       

        function getDetails() {
        	movieService.getDetails($stateParams.movieID).then(
        		function(response) {
                    vm.details = response.data;
                    document.body.scrollTop = document.documentElement.scrollTop = 0;

            })
        }
        getDetails();
    }
})();