/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

var chatModule = angular.module('chatModule', ['ngRoute', 'ui.bootstrap']);

chatModule.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'autorisation.html',
            controller  : 'LogInController'
        })

        // route for the about page
        .when('/greeting', {
            templateUrl : 'greeting.html',
            controller  : 'UserListController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'example2.html',
            controller  : 'ChatController'
        })
    .otherwise({ redirectTo: '/' });
});

chatModule.controller('aboutController',['$scope' , '$http', '$location', function($scope, $http, $location) {
    $scope.auto = [];
    $scope.message = 'Look! I am an about page.';
}]);