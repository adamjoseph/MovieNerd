(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$state', 'movieService'];

    /* @ngInject */
    function MainController($state, movieService) {
        var vm = this;
        vm.title = 'MainController';

        ////////////////

        vm.getMovies = function(searchMovie) {
            movieService.getMovies(searchMovie).then(
                function(response){
                    vm.movies = response.data.Search;
                    vm.searchMovie = '';
    
                    // }, function(error) {
                    //     if (error.data) {
                    //         toastr.error('Sorry, but there was a problem: ' + error.data);
                    //     } else {
                    //         toastr.info('Data not found');
                    //     }// close else
                    // }//close error function
            })
        }
    }
})();