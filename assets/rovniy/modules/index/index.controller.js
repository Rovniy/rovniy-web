(function () {
    'use strict';

    angular
        .module('rovniy')
        .controller('indexController', indexController);

    indexController.$inject = ['$location'];

    function indexController($location) {
        var vm = this;
        
        activate();
        ///////////////////
        function activate() {
            var vl = localStorage.getItem('logx');
            if (!vl) {
                $location.path('/login')
            }
            $http.post('url')
        }
    }
})();