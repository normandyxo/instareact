var express = require('express');
var router = express.Router();

router.route('/feed')
    .post(function(req,res){
        console.log(req);
        res.json({message: 'POST received'});
    })
    .get(function (req,res) {
        console.log(req);
        res.json({message: 'GET received'});
    });
module.exports=router;
