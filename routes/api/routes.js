var express = require('express');
var url = require('url');
var router = express.Router();

router.route('/feed')
    .post(function(req,res){
        console.log(req);
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
