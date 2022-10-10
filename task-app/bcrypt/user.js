const mongoose = require('mongoose');
const validator =require('validator');
const bcrypt = require('bcryptjs');



const userSchema = new mongoose.Schema({ name :{
    type :String,
    required :true,
    trim : true
},
age : {
    type : Number,
    default :0
},
email:{
    type :String,
    required : true,
    trim:true,
    lowecase : true,
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error('invalid email')
        }
    }
 },
password:{
   type :String,
   required :true,
   trim : true,
   minlength :7,
   validate(value){
    if(value ===('password')){
      throw new Error('enter different password');
    }
   
   }


}
})


userSchema.pre('save', async function(next) {
    const user =this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User;