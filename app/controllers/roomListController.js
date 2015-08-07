/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('RoomListController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
    $scope.greeting = 'Holaaaaaa!';
    var self = $scope;

    self.sayAlert = function() {
        console.log(44);
    } ;
    self.showAlert = function(a) {
        alert(a);
    };

    self.templates =
        [ { name: 'template1.html', url: 'app/templates/userList.html'},
            { name: 'template2.html', url: 'autorisation.html'} ];
    self.roomBlock = $scope.templates[0];



    self.open = function (size) {
        self.SetNewRoomName('');
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'app/templates/roomDialog.html',
            scope: self,
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });

        self.ok = function (value) {
            console.log(value);
            self.SetNewRoomName(value);
            modalInstance.dismiss('cancel');
            self.addRoom({name: value});
            //modalInstance.close($scope.selected.item);
        };

        self.cancel = function () {
            modalInstance.dismiss('cancel');
        };
    };
    self.changeCurrentRoom = function(newId) {
        self.SetCurrentRoomId(newId);
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
