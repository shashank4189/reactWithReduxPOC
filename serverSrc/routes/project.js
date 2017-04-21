/**
 * Created by Shashank on 2/16/2017.
 */


let express = require('express');
let Q = require('q');
let ProjectService = require('../service/projectService');
let utility = require('../service/common/utility');
let router  = express.Router();

router.get('/projecttypes',function(req, res, next){

    ProjectService.getProjectType()
        .then(function(data){
            res.json(data);
        });

})

router.get('/getProjects',function(req, res, next){

    ProjectService.getProjects()
        .then(function(data){
            res.json(data);
        });

})

router.post('/search',function(req, res, next){
    console.log('req.Search',req.body);
    ProjectService.searchProject()
        .then(function(data){
            res.json(data);
        });

})

router.post('/projects/add',function(req, res, next){
    ProjectService.addProjectType(req.body)
        .then(function(data){
            console.log('projectadd',data);
            res.json(data);
        });

})

module.exports = router;