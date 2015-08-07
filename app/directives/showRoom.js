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
            odd: '=odd',
            roomClick: '&'
        },
        templateUrl: 'app/templates/roomList.html'
    };
});