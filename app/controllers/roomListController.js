/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('RoomListController', ['$scope', function($scope) {
    $scope.greeting = 'Holaaaaaa!';
    var self = $scope;

    $scope.sayAlert = function() {
        $scope.greeting = 'dfgdfgdfg'
    } ;
    self.showAlert = function() {
        alert(6);
    };

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
