/**
 * Created by Shashank on 2/17/2017.
 */
let mongoose = require('mongoose');
let Users = mongoose.model('Users');
let Modules = mongoose.model('Modules');
let crypto = require('crypto');

const getModules= ()=>{
    return Modules.find();
}


module.exports ={
    getModules:getModules
}
