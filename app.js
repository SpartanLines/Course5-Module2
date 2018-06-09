(function(){
    'use strict';
    angular.module('LunchApp',[])
        .controller('LunchController',LunchController)
    LunchController.inject= ['$scope'];
    function LunchController($scope){
        $scope.message = "";
        $scope.input="";
        $scope.showMessage = function(){
           var Toprocess = $scope.input.split(',');
            if(Toprocess.length >3)
            {
                $scope.message="Too much!"
            }
            else if ($scope.input === "" )
            {
                $scope.message="Your list is empty"
            }
            else {
                $scope.message="Enjoy"
            }
        };
    }
})();
