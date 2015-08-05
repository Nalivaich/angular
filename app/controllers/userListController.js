/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('UserListController', ['$scope', '../services/userService', function($scope, userService) {
    var self = $scope;
    self.greeting = 'Hola!';
    self.newArray= [1,2,3,4];
    self.templates =
        [ { name: 'template1.html', url: 'views/autorisation.html'},
            { name: 'template2.html', url: 'views/autorisation.html'} ];
    self.template = $scope.templates[0];

    self.show1 = function() {
        console.log(self.greeting);
    };


    self.show = userService.show();
}]);
