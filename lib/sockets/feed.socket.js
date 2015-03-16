var socketIO = require('socket.io');

var feedSocket = {};

feedSocket.onDataReceived = function (feed) {
    var data = [],
        image = {};

    if (Array.isArray(feed)) {
        feed.forEach(function (update) {
            image.object_id = update.object_id;
            image.data = update.data;
        });

        console.log(image.data);
    }

};

module.exports = feedSocket;
