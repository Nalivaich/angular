/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.directive('myUser', function() {
    return {
        restrict: 'AEC',
        scope:{
            name: '=name',
            id: '=id',
            num: '=num',
            private: '=private',
            clickFunc: '=click'
        },
        templateUrl: 'app/templates/roomList.html'
    };
});