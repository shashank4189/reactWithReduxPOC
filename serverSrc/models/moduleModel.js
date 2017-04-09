(function () {
    'use strict';

    let mongoose = require( 'mongoose' );

// Create User Schema
    let moduleSchema=new mongoose.Schema({
        moduleName:{type:String},
        shortName:{type:String}
    });
    module.exports = mongoose.model('Modules',moduleSchema);
})();