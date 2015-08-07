/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('ChatController', ['$scope', '$modal', '$log', '$timeout', function($scope, $modal, $log, $timeout) {
    $scope.greeting = 'Hola!';
    var self = $scope;
    self.setMode = {};
    self.make = '';



    self.open = function (mode) {
        if(mode) {
            self.make = 'add in ';
        } else {
           self.make = 'remove from ';
        }
        self.SetNewRoomName('');
        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'app/templates/addUserDialog.html',
            scope: self,
            size: 'sm',
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

    self.sendMessage = function(message) {
        alert(self.currentMessage);
    };

    self.choseUser = function(userId) {
        alert(userId);
    };

    self.removeRoom = function(roomId) {
        //add service method for remove room on DB

        var elem = $('#roomListItem');
        elem.removeClass('bounceInUp');
        elem.addClass('bounceOutRight');

        $timeout(function() {
            self.removeRoomObject(self.currentRoomId);
        }, 900);

        console.log(self.roomsRepository);
    }


}]);
