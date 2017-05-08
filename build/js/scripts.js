/**
 * Created by srikanth on 06/05/2017.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope', function($scope) {

    $scope.logInfo = function () {
        if(validate()) {
            console.log('About the Pet');

            console.log('Name: ' + $scope.petName);
            console.log('Type: ' + $scope.petType);
            console.log('Gender: ' + $scope.petGender);
            console.log('Date of Birth: ' + $scope.petDOB);
            console.log('Chipped or Tagged: ' + $scope.ChippedOrTagged);

            console.log('About You');

            console.log('Name: ' + $scope.title + '. ' + $scope.yourName);
            if($scope.DOB) {
                console.log('Date of Birth: ' + $scope.DOB);
            }
            console.log('Email Address: ' + $scope.yourEmail);
            console.log('Contact Telephone: ' + $scope.telephone);

            console.log('Cover Start Date: ' + $scope.coverStartDate);
        }
    }

    function validate() {
        var valid = true;
        if($scope.petInsurance.petName.$invalid) {
            $scope.petInsurance.petName.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.petType.$invalid) {
            $scope.petInsurance.petType.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.petGender.$invalid) {
            $scope.petInsurance.petGender.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.petDOB.$invalid) {
            $scope.petInsurance.petDOB.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.ChippedOrTagged.$invalid) {
            $scope.petInsurance.ChippedOrTagged.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.title.$invalid) {
            $scope.petInsurance.title.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.yourName.$invalid) {
            $scope.petInsurance.yourName.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.yourEmail.$invalid) {
            $scope.petInsurance.yourEmail.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.telephone.$invalid) {
            $scope.petInsurance.telephone.$touched = true;
            valid = false;
        }
        if($scope.petInsurance.coverStartDate.$invalid) {
            $scope.petInsurance.coverStartDate.$touched = true;
            valid = false;
        }
        return valid;
    }
}]);

// Directive for date picker ui for changing dates.
myApp.directive('jqdatepicker', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        scope: {
            date: '='
        },
        link: function (scope, element, attrs, ngModelCtrl) {
            $(element).datepicker({
                changeMonth: true,
                changeYear: true,
                dateFormat: 'dd-mm-yy',
                onSelect: function (date) {
                    scope.date = date;
                    scope.$apply();
                }
            });
        }
    };
});