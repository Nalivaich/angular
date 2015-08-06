/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('RoomListController', ['$scope', function($scope) {
    $scope.greeting = 'Holaaaaaa!';
    var self = $scope;

    self.sayAlert = function() {
        console.log(44);
    } ;
    self.showAlert = function() {
        alert(6);
    };

    self.templates =
        [ { name: 'template1.html', url: 'app/templates/userList.html'},
            { name: 'template2.html', url: 'autorisation.html'} ];
    self.roomBlock = $scope.templates[0];

    /*self.createRoom = function() {
        self.currentRoomIndex(allRoomsVM.add(self.newRoomName(), self.currentUserIndex(), self.privateFlag(), function() {
            allUsersVM.addUserRoom(self.currentUserIndex(), self.currentRoomIndex(), function() {
                self.roomCreaterFlag(allUsersVM.isCurrentUserRoom(self.currentRoomIndex() , self.currentUserIndex()));
                self.activeRoomFlag(true);
                self.newRoomName('');
            });
        }));

    };*/
}]);
