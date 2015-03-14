
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var localtunnel = require('localtunnel');
var app = express();
var feed = require('./routes/api/routes');
var Instagram = require('./lib/instagram/instagram');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', feed);


// App routing
require('./routes/index')(app);

// API routing

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));

    var tunnel = localtunnel(app.get('port'), { subdomain: 'normandyxo' }, function(err, tunnel) {

        var i = Instagram('1671f69c58f540f5a88828f18a0a1f65', '153be3e243ae464c902d8d710ea7b5f7', tunnel.url + '/api/feed/');
        i.initializeSubscriptions(['shibainu', 'waffles', 'corgi']);
    });

    tunnel.on('close', function() {
        // tunnels are closed
    });
});
