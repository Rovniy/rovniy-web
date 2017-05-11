(function () {
    'use strict';

    angular
        .module('rovniy')
        .config(config);

    config.$inject = ['$routeProvider'];
    
    function config ($routeProvider) {
        $routeProvider
            .when ('/', {
                templateUrl: '/index/index.html',
                controller: 'indexController',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();