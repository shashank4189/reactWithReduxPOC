

/*jshint node:true*/
var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var db = require('app/dbSetup');
var routes = require('app/routes');
var modules = require('app/routes/modules');
var projects = require('app/routes/project');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var jwt = require('jsonwebtoken');

app.set('port',  9090);
app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/swaggerAPI/dist')));
process.env.SECRET_KEY  = 'myshashankkey';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*app.use(function(req, res, next){
  let token =req.cookies.UserToken;
  /!*if(req.method =='POST')*!/
  if(token){
     console.log(token);
      jwt.verify(token,process.env.SECRET_KEY,function(err,decode){
        console.log(err);
        console.log(decode);
          if(err){
              res.status(500).send('Invalid Token');
          }else{
            next();
          }
      })
  }else{
      res.send('please send a token');
  }

});*/



// Handle Errors gracefully
app.use(function(err, req, res, next) {
    if(!err) return next();
    console.log(err.stack);
    res.json({error: true});
});

//  Main App Page
app.use('/rest', routes);
app.use('/rest', modules);
app.use('/rest', projects);



/*app.route('/!*').get(function(req, res) {
    /!*if(req.path==='/swagger'){
     // for swagger
     return res.sendFile(path.join(__dirname +'/public/swagger_dist/index.html'));
     }*!/
    return res.sendFile(path.join(__dirname+'/index.html'));

});*/


server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;

