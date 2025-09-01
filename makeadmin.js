const  User = require('./models/User');
const bcrypt = require('bcrypt');
async function makeAdmin(){
    try{
        let user = await User.findOne({email:'sharma@yopmail.com'});
        if(user){
            console.log("user updated..");
            
     }else{
       user = new User();
       user.firstName='Priya';
       user.lastName ='Sharma';
       user.email='sharma@yopmail.com';
       let encryptedPassword=bcrypt.hashSync('9876',10);
       user.password =encryptedPassword;
       user.userType ='Admin';
       await user.save();
       console.log('user saved sucessfully...');
    }
    }catch(err){
        console.log(err);
        
    }
}
module.exports = makeAdmin;