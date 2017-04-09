/**
 * Created by Shashank on 2/17/2017.
 */
let mongoose = require('mongoose');
let Users = mongoose.model('Users');
let Menus = mongoose.model('Menus');
let crypto = require('crypto');
var jwt = require('jsonwebtoken');
let Q = require('q');

 function authenticateUser(user){

   let query ={emailID:user.emailID};
   return Q(query)
     .then(function(){
       return Users.find(query,function(err,data){
         if(err){
           console.log(err);
         }
         else{
           console.log('datata',data);
         }
         })
       })
         .then(function(data){
           if (data.length > 0) {
             let finalData ={}
             let resultData = data[0];

             let encData = sha512(user.password, resultData.salt);
             if (encData.passwordHash == resultData.hash) {
               let userData={
                 emailID:resultData.emailID,
                 panNumber:resultData.panNumber
               }
               var token = jwt.sign(userData, process.env.SECRET_KEY, {
                 expiresIn: 1440 // expires in 24 hours
               });
               finalData.data = resultData;
               finalData.token = token;
               //console.log('dataDFH',resultData);
               return  finalData;
             }
           }
         })


}

function saltHashPassword(userpassword) {
  var salt = genRandomString(16); /** Gives us salt of length 16 */
  var passwordData = sha512(userpassword, salt);
  console.log('UserPassword = '+userpassword);
  console.log('Passwordhash = '+passwordData.passwordHash);
  console.log('nSalt = '+passwordData.salt);
  return {
    salt:passwordData.salt,
    hash:passwordData.passwordHash
  };
}

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
var sha512 = function(password, salt){
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt:salt,
    passwordHash:value
  };
};

/**
 * generates random string of characters i.e salt
 * @function
 * @param {number} length - Length of the random string.
 */
var genRandomString = function(length){
  return crypto.randomBytes(Math.ceil(length/2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0,length);   /** return required number of characters */
};


  function createUser(user){
    let encPass =  saltHashPassword(user.password);
    user.hash =  encPass.hash;
    user.salt =  encPass.salt;
    let  BC = new Users(user);
    return BC.save();
}

function getMenuItems(type){
    let query = {userType:type}
    return Menus.find(query);
}


module.exports ={
  authenticateUser:authenticateUser,
  createUser:createUser,
  getMenuItems:getMenuItems
}
