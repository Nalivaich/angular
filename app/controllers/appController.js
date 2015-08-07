/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('AppController', ['$scope', function($scope) {
    var self = $scope;
    $scope.newArray= [1,2,3,4];
    self.greeting = 'Hola!';
    self.usersRepository = [{name: 'some name', id: 0}, {name: 'some text else', id: 1}];
    self.roomsRepository = [{name: 'some name', id: '12'}, {name: 'some text else', id: '13'}];
    self.messagesRepository = [];
    self.currentUser = {name:'', password: ''};

    self.currentUser = {};
    self.currentUserName = 'Guest';
    self.currentUserPassword = '';
    self.currentUserIndex = 0;
    self.currentMessage = '';
    self.currentRoomId = '';
    self.privateFlag = false;
    self.newRoomName = 's';
    self.activeRoomFlag = false;
    self.roomCreaterFlag = false;
    self.authorizationFlag = false;
    self.addOrRemove  = false;

    self.addUser = function(object) {
        self.usersRepository.push(object);
    };
    self.addRoom = function(object) {
        self.roomsRepository.push(object);
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

    self.SetCurrentMessage = function(newValue) {
        self.currentMessage = newValue;
    };





}]);