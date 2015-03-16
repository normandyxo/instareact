var express = require('express'),
    url = require('url'),
    router = express.Router(),
    feedSocket = require('../../lib/sockets/feed.socket');

router.route('/feed')
    .post(function(req,res){

        console.log(req.body);

        feedSocket.onDataReceived(req.body);

        res.json({message: 'POST received'});
    })
    .get(function (req,res) {
        var parsedRequest = url.parse(req.url, true),
            responseBody,
            responseHeaders;

        responseBody = parsedRequest['query']['hub.challenge'];
        responseHeaders = {
            'Content-Length': responseBody.length,
            'Content-Type': 'text/plain'
        };

        console.log(responseBody);

        res.writeHead(200, responseHeaders);
        res.write(responseBody);

        return res.end();
    });

module.exports=router;
