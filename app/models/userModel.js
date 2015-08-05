/**
 * Created by vitali.nalivaika on 05.08.2015.
 */


function UserModel(data) {
    'use strict';

    var self = this;

    data = $.extend({
        id: 0,
        name: '',
        lastName: '',
        password: '',
        userRooms: [],
        external: ''
    }, data);

    self.id = ko.observable(data.id);
    self.name = ko.observable(data.name);
    self.lastName = ko.observable(data.lastName);
    self.password = ko.observable(data.password);
    self.userRooms = ko.observableArray(data.userRooms.map(function (currentvalue) {
        return {
            roomIndex: ko.observable(currentvalue.roomIndex)
        };
    }));
    self.external = ko.observable(data.external);

    self.fullName = ko.computed(function() {
        return (self.name() + " " + self.lastName());
    });

}

//return UserModel;
