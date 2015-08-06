/**
 * Created by vitali.nalivaika on 06.08.2015.
 */

chatModule.controller('LogInController', ['$scope', '$location', '$timeout',  function($scope, $location,  $timeout) {
    var self = $scope;

    var pp = $("#autorisation");

    self.signUp = function(object, form) {
        if(!form.$valid){
            return false;
        }
        var elem = $('#autorisation');
        elem.removeClass('bounceInLeft');
        elem.addClass('bounceOutRight');
        self.SetCurrentUserName(object.name);
        self.SetCurrentUserPass(object.password);
        $timeout(function() {
            $location.path('/greeting');
        }, 900);

        //$parent.parentScopeProperty
    };

}]);