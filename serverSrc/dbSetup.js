/**
 * Created by Shashank on 2/17/2017.
 */
let mongoose = require('mongoose');
let appConfig = require('app/appConfig');
let dbUrl = appConfig.mongoURL;
let dbName = appConfig.dbName;
mongoose.connect(dbUrl);
/*mongoose.createConnection('localhost', dbName);*/
/*mongoose.connect(dbUrl, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + dbUrl);
  }
});*/

// event call when mongo connect
mongoose.connection.on('connected',function(){
console.log('mongoose connected to this',dbUrl);
});
// event call when mongo error
mongoose.connection.on('error',function(){
  console.log('mongooose default connection error',dbUrl);
});
// event call when mongo connect
mongoose.connection.on('disconnected',function(){
  console.log('mongooose disconnected from this',dbUrl);
});
// event call when mongo connect
process.on('SIGINT',function(){
mongoose.connection.close(function(){
  console.log('mongoose connection is close from  app');
  process.exit(0);
});

})
require('app/models/userModel');
require('app/models/appMenuModel');
require('app/models/moduleModel');
require('app/models/projectTypeModel');
require('app/models/projectModel');
