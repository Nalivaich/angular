/**
 * Created by vitali.nalivaika on 06.08.2015.
 */

chatModule.directive('myFullName', function() {
    return {
        restrict: 'AEC',
            template: 'Name: {{currentUserName}}'
    };
});