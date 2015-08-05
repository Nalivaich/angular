/**
 * Created by vitali.nalivaika on 05.08.2015.
 */

function MessageModel(data) {
    'use strict';

    var self = this;

    data = $.extend({
        idRoom: 0,
        idUser: 0,
        message: '',
        external: ''
    }, data);

    self.idRoom = ko.observable(data.idRoom);
    self.idUser = ko.observable(data.idUser);
    self.message = ko.observable(data.message);
    self.external = ko.observable(data.external);


}
//return MessageModel;