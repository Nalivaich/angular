/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('AppController', ['$scope', 'userService', 'roomService', function($scope, userService, roomService) {
    var self = $scope;
    $scope.newArray= [1,2,3,4];
    self.greeting = 'Hola!';
    self.usersRepository = [];
    self.roomsRepository = [];
    self.messagesRepository = [];
    self.currentUser = {name:'', password: ''};

    self.currentUser = {};
    self.currentUserName = 'Guest';
    self.currentUserPassword = '';
    self.currentUserId = 0;
    self.currentMessage = '';
    self.currentRoomId = '';
    self.privateFlag = false;
    self.newRoomName = 's';
    self.activeRoomFlag = false;
    self.roomCreaterFlag = false;
    self.authorizationFlag = false;
    self.addOrRemove  = false;

    self.getAllUsers = function getAll() {
        userService.getAll(function(receivedUsers) {
            $.each(receivedUsers, function(index, receivedUser) {
                self.usersRepository.push(new returnUserModel(receivedUser));
            });
            $scope.$apply();
        }, function() {
            console.log('can\'t receive users');
        });
    }();

    self.getAllRooms = function getAll() {
        roomService.getAll(function(receivedRooms) {
            $.each(receivedRooms, function(index, receivedRoom) {
                self.roomsRepository.push(new returnRoomModel(receivedRoom));
            });
            $scope.$apply();
        }, function() {
            console.log('can\'t receive rooms');
        });
    }();

    self.addNewUser = function(object) {
        self.usersRepository.push(object);
        $scope.$apply();
    };
    self.addNewRoom = function(object) {
        self.roomsRepository.push(object);
        $scope.$apply();
    };

    self.removeRoomObject = function(roomId) {
        self.roomsRepository = _.filter(self.roomsRepository, function(n) {
            return n.id != roomId;
        });
    };


    self.SetCurrentUserName = function(name) {
        self.currentUserName = name;
    };
    self.SetCurrentUserPass = function(pass) {
        self.currentUserPassword = pass;
    };

    self.SetAuthorizationFlag = function(newValue) {
        self.authorizationFlag = newValue;
    };
    self.SetNewRoomName =function(newValue) {
        self.newRoomName = newValue;
    };
    self.SetCurrentRoomId = function(newValue) {
        self.currentRoomId = newValue;
    };
    self.SetCurrentUserId = function(newValue) {
        self.currentUserId = newValue;
    };

    self.SetCurrentMessage = function(newValue) {
        self.currentMessage = newValue;
    };

    self.setRoomCreaterFlag = function(newValue) {
        self.roomCreaterFlag = newValue;
    };
    self.setActiveRoomFlag = function(newValue) {
            self.activeRoomFlag = newValue;
    };
    self.setCurrentMessage = function(newValue) {
            self.currentMessage = newValue;
    };

    self.refresh = function() {
        $scope.$apply();
    };



    self.isCurrentUserRoom = function(currentRoomIndex, currentUserIndex) {
        if(currentRoomIndex === '' || currentUserIndex === '') {
            return false;
        }

        var observableUser = $.grep(self.usersRepository, function(item) {
            return item.id === currentUserIndex;
        })[0];

        var foundUserInRoom = $.grep(observableUser.userRooms, function (userItem, index) {
            return userItem.roomIndex === currentRoomIndex;
        });

        if (!foundUserInRoom.length) {
            return false;
        } else {
            return true;
        }

    };


    self.addUserToRoom = function(userIndex, currentRoomIndex, nextfunction) {
        console.log(userIndex, currentRoomIndex);
        roomService.addUserToRoom({
            userIndex: userIndex
        }, {
            id: currentRoomIndex
        }, function() {

            var observableRoom = $.grep(self.roomsRepository, function(item) {
                return item.id === currentRoomIndex;
            })[0];

            if (!observableRoom) {
                return;
            }

            var foundUserInRoom = $.grep(observableRoom.usersIDInRoom, function (userItem, index) {

                return userItem.userIndex === userIndex;
            });
            if (!foundUserInRoom.length) {
                observableRoom.usersIDInRoom.push({
                    userIndex: userIndex
                });

                self.$apply();
            }
        }, function() {
            console.log('can\'t add user to room');
        });
    };





}]);