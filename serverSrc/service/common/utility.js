/**
 * Created by Shashank on 2/17/2017.
 */

let mongoose = require('mongoose');
let Users = mongoose.model('Users');


function checkUser(user){
  if(user) {
    let query = {emailID: user.emailID, password: user.password};
    return Users.find(query);
  }
}



module.exports ={
checkUser:checkUser,

}
