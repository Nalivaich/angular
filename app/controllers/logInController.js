/**
 * Created by vitali.nalivaika on 06.08.2015.
 */

chatModule.controller('LogInController', ['$scope', '$location', '$timeout',  function($scope, $location,  $timeout) {
    var self = $scope;

    var pp = $("#autorisation");

    self.signUp = function() {
        var elem = $('#autorisation');
        elem.removeClass('bounceInLeft');
        elem.addClass('bounceOutRight');
        $timeout(function() {
            $location.path('/greeting');
        }, 1000);


    };

}]);