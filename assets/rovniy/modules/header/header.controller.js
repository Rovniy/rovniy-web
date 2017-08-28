(function () {
    'use strict';

    angular.module('rovniy')
        .controller('headerController', headerController);

    headerController.$inject = ['$scope'];

    function headerController($scope) {
        var vm = this;
        vm.active = false;

        activate();
        /////////////////////
        function activate() {
            timer();
        }

        /**
         * Часы и время в футере
         */
        function timer(){
            var date = new Date();
            var hours = date.getUTCHours();
            var minutes = date.getUTCMinutes();
            var seconds = date.getUTCSeconds();
            var day = date.getUTCDay();
            var mounth = date.getUTCMonth();
            var year = date.getUTCDate();
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            if (day < 10) day = "0" + day;
            if (mounth < 10) mounth = "0" + mounth;
            $scope.currentTime = hours + ":" + minutes + ":" + seconds;
            $scope.currentDate = day + "." + mounth + "." + year;
            setTimeout(function(){
                timer();
                $scope.$digest();
            }, 1000);
        }

    }
})();

