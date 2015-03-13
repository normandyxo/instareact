var express = require('express');
var router = express.Router();

router.route('/feed')
    .post(function(req,res){
        console.log(req);
    });
module.exports=router;
