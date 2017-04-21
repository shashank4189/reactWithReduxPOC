(function () {
  'use strict';

let mongoose = require( 'mongoose' );
//let explain = require('mongoose-explain');


let projectSchema=new mongoose.Schema({
  ProjectName:{type:String,required:true},
  StartDate:Date,
  EndDate:Date,
  ProjectType:{type:String,required:true},
  Description:{type:String, required:true},
});

module.exports=mongoose.model('Projects',projectSchema);
})();