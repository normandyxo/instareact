
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    localtunnel = require('localtunnel'),
    socketIO = require('socket.io')(http);

/**
 * App components
 */
var app = express(),
    config = require('./config/config.json'),
    feed = require('./routes/api/routes'),
    Instagram = require('./lib/instagram/instagram'),
    instagramConfig = require('./config/instagram.json');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/api', feed);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


// App routing
require('./routes/index')(app);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

    var tunnel = localtunnel(app.get('port'), { subdomain: config.TUNNEL_SUBDOMAIN }, function(err, tunnel) {

        Instagram(instagramConfig)
            .initializeSubscriptions();
    });

    tunnel.on('close', function() {
        // tunnels are closed
    });
});

socketIO.on('connection', function () {
    console.log('user connected');
});
