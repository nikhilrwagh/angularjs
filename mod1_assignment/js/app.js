(function () {
    'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {

    $scope.checkIfTooMuch = function(){
        if ($scope.inputtext === undefined
            || $scope.inputtext.length === 0)
        {
            $scope.message =  "Please enter data first";
        }
        else {
            var InputItems = $scope.inputtext.split(",");
            var stripedList = [];

            for(var i=0, j= InputItems.length; i < j; i++)
            {
                if (InputItems[i].trim() !== "")
                {
                    stripedList.push(InputItems[i]);
                }
            }

            if (stripedList.length <= 3)
            {
                $scope.message =  "Enjoy!";
            }
            else
            {
                $scope.message = "Too much!";
            }
        }

    };
}
})();
