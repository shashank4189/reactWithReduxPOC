(function () {
  'use strict';

  let mongoose = require( 'mongoose' );
  let projectTypeSchema=new mongoose.Schema({
      ProjectType:{type:String,required:true},
      Description:{type:String}
  });

  module.exporst=mongoose.model('ProjectTypes',projectTypeSchema);
})();