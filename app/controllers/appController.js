/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

chatModule.controller('AppController', ['$scope', function($scope) {
    var self = $scope;
    $scope.newArray= [1,2,3,4];
    self.greeting = 'Hola!';
    self.usersRepository = [{name: 'some name'}, {name: 'some text else'}];
    self.roomsRepository = [];
    self.messagesRepository = [];

    self.currentUserName = 'Guest';
    self.currentUserPassword = '';
    self.currentUserIndex = 0;
    self.currentMessage = '';
    self.currentRoomIndex = '';
    self.privateFlag = false;
    self.newRoomName = '';
    self.activeRoomFlag = false;
    self.roomCreaterFlag = false;
    self.authorizationFlag = false;
    self.addOrRemove  = false;

}]);



