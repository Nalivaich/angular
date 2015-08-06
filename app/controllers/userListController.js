/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('UserListController', ['$scope', 'userService', function($scope, userService) {
    var self = $scope;
    self.greeting = 'Hola!';
    self.newArray= [1,2,3,4];
    self.templates =
        [ { name: 'template1.html', url: 'app/templates/userList.html'},
            { name: 'template2.html', url: 'autorisation.html'} ];
    self.userBlock = $scope.templates[0];

    self.show = function() {

        userService.show();
    };


    //self.show = userService.show();
}]);
