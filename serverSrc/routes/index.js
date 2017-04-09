/**
 * Created by Shashank on 2/16/2017.
 */


let express = require('express');
let Q = require('q');
let Users = require('../service/userService');
let utility = require('../service/common/utility');
let router  = express.Router();

router.post('/createUser',function(req,res,next){
  let user = req.body;
  return Q(user)
    .then(utility.checkUser)
    .then(function(data){
      if(data.length>0){
        res.json('User already exist');
      }else{
       return Users.createUser(user);
      }})
    .then(function(data){
      res.json('user is created');
    })
    .fail(next);
})

router.post('/logIn',function(req,res,next){
  let user = req.body;
  return Q(user)
    .then(Users.authenticateUser)
    .then(function(data){
      res.json(data);
    })
    .fail(next);

})

router.get('/getMenus/:type',function(req, res, next){
  let userType = req.params.type;
  Users.getMenuItems(userType)
    .then(function(data){
      console.log('menus found',data);
      res.json(data);
    });
  console.log('userType',userType);
})

module.exports = router;