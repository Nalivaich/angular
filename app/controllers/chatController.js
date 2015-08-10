/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('ChatController', ['$scope', '$modal', '$log', '$timeout', 'roomService', 'messageService', function($scope, $modal, $log, $timeout, roomService, messageService) {
    $scope.greeting = 'Hola!';
    var self = $scope;
    self.setMode = {};
    self.make = '';

    self.getCurrentRoom = function() {
        return self.roomsRepository.filter(function (item) {
            return item.id == self.currentRoomId;
        })[0];
    };

    self.getUserByID = function(userId) {
        return self.usersRepository.filter(function (item) {
            return item.id == userId;
        })[0];
    };


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

        self.choseUser = function(userId, make) {
            modalInstance.dismiss('cancel');
            if(make.length < 9) {

                self.addUserToRoom(self.currentRoomId, userId);
            } else {

            }
        };

        self.ok = function (value) {
            console.log(value);
            self.SetNewRoomName(value);
            modalInstance.dismiss('cancel');
            self.addNewRoom({name: value});
        };

        self.cancel = function () {
            modalInstance.dismiss('cancel');
        };
    };

    self.sendMessage = function(message) {
        self.addMessageInRep({
            idRoom: self.currentRoomId,
            idUser: self.currentUserId,
            message: self.currentMessage
        });


        self.addMessageInRoom({
            currentRoomId: self.currentRoomId,
            message: (self.currentUserName + " Say: " + self.currentMessage),
            userId: self.currentUserId
        });
    };

    self.addMessageInRoom = function(object) {
        roomService.addMessage(object, function () {
            var observableRoom = $.grep(self.roomsRepository, function(item) {
                return item.id === object.currentRoomId;
            })[0];

            observableRoom.messagesHistory.push({message: object.message, userId: object.userId });
            self.setCurrentMessage('');
            self.refresh();
            return true;
        }, function () {
            console.log('can\'t add message');
        });
    };

    self.addMessageInRep = function(data) {
        var newMessageObject = new returnMessageModel({
            idRoom: data.idRoom,
            idUser: data.idUser,
            message: data.message
        });
        messageService.add(newMessageObject, function (newObj) {
            self.messagesRepository.push(newObj);
            return true;
        }, function () {

        });
    };



    self.removeRoom = function(roomId) {
        var str = '.cl' + roomId;
        var elem = $(str);
        elem.removeClass('bounceInUp');
        elem.addClass('bounceOutRight');

        self.remove(self.currentRoomId, function(param) {
            self.SetCurrentRoomId(param);
            self.setRoomCreaterFlag(self.isCurrentUserRoom(self.currentRoomId, self.currentUserId));
            self.setActiveRoomFlag(false);
            self.refresh();
        });

        /*$timeout(function() {

        }, 700);*/

        console.log(self.roomsRepository);
    };

    self.remove = function(currentRoomIndex, nextFunction) {
        roomService.remove({
            id: ''
        }, function() {
            /*var index;
            for(var i = 0; i <  self.roomsRepository.length; i++) {
                if(self.roomsRepository[i].id == currentRoomIndex) {
                    index = i;
                }
            }*/

            self.removeRoomObject(currentRoomIndex);
            //self.roomsRepository.splice(index, 1);
            nextFunction('');

            return true;
        }, function() {
            console.log('can\'t remove room');
        });
    };


}]);
