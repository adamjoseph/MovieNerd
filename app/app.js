(function() {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){

        	//More any unmatched URL set up default route to main
			$urlRouterProvider.otherwise('/main');

			$stateProvider
			.state('main', {
				url: "/main",
				templateUrl: "app/partials/main.html",
				controller: "MainController",
				controllerAs: "vm"
			})
			.state('main.details', {
				url: '/details/:movieID',
				templateUrl: "app/partials/details.html",
				controller: "detailController",
				controllerAs: "vm"
			})

			
        })
})();