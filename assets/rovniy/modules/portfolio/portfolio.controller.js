(function () {
    'use strict';

    angular
        .module('rovniy')
        .config(function ($routeProvider) {
            $routeProvider
                .when ('/portfolio', {
                    templateUrl: '/portfolio/portfolio.html',
                    controller: 'portfolioController',
                    controllerAs: 'vm'
                })
        })
        .run(function($rootScope, $timeout){
            if ($rootScope.modules) {
                $rootScope.activateModule({
                    id: "3",
                    name: "Портфолио",
                    icon: "icon_folio.png",
                    url: "folio"
                });
            } else {
                $timeout(function(){
                    $rootScope.activateModule({
                        id: "3",
                        name: "Портфолио",
                        icon: "icon_folio.png",
                        url: "folio"
                    });
                },1)
            }
        })
        .controller('portfolioController', portfolioController);

    portfolioController.$inject = ['$rootScope'];


    function portfolioController($rootScope) {
        var vm = this;

        activate();
        ///////////////////
        function activate() {
            console.log('$rootScope.activateModule',$rootScope.activateModule)
        }
    }
})();

