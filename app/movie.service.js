(function() {
    'use strict';

    angular
        .module('app')
        .service('movieService', movieService);

    movieService.$inject = ['$http', '$q'];

    /* @ngInject */
    function movieService($http, $q) {
        this.getMovies = getMovies;
        this.getDetails = getDetails;

        ////////////////

        function getMovies(searchMovie) {

           var defer = $q.defer();

           $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                	s: searchMovie,
                	plot: 'full'
                }
            }).then(function(response) {
            	if(typeof response.data == 'object') {
               defer.resolve(response);
           		} else {
           			defer.reject('No Data Found');
           		}
           }, function(error) {
           		defer.reject(error);
           });

           return defer.promise;

       
        }

        function getDetails(movieID) {

        	var defer = $q.defer();

           $http({
                method: 'GET',
                url: 'http://www.omdbapi.com/',
                params: {
                	i: movieID
                }
            }).then(function(response) {
            	if(typeof response.data == 'object') {
               defer.resolve(response);
               	} else {
               		defer.reject('No Data Found');
               	}
           }, function(error) {
           		defer.reject(error);
           });

           return defer.promise;
        }
    }
})();