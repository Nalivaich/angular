/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

var chatModule = angular.module('chatModule', ['ngRoute']);

chatModule.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'index.html',
            controller  : 'aboutController'
        })

        // route for the about page
        .when('/auto', {
            templateUrl : 'views/autorisation.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'views/autorisation.html',
            controller  : 'contactController'
        })
    .otherwise({ redirectTo: '/' });
});

chatModule.controller('aboutController',['$scope' , '$http', '$location', function($scope, $http, $location) {
    $scope.auto = [];
    $scope.message = 'Look! I am an about page.';
}]);