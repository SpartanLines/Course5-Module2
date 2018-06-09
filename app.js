(function(){
    'use strict';
    angular.module('LunchCheck',[])
        .controller('LunchCheckController',LunchCheckController)
    LunchCheckController.inject= ['$scope'];
    function LunchCheckController($scope){
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
                $scope.message="Please Enter Data First"
            }
            else {
                $scope.message="Enjoy"
            }
        };
    }
})();
