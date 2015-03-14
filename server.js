
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    localtunnel = require('localtunnel');

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
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', feed);


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
