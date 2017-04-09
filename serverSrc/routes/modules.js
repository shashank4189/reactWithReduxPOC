/**
 * Created by root on 8/4/17.
 */

let express = require('express');
let Q = require('q');
let Modules = require('app/service/moduleService');
let utility = require('app/service/common/utility');
let router  = express.Router();

router.get('/getModules',function(req, res, next){

    Modules.getModules()
        .then(function(data){
            res.json(data);
        });
})

module.exports = router;