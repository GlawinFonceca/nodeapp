const mongoose = require('mongoose');
const validator =require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TASK = require('./task');



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
    unique : true,
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


},
tokens :[{
    token:{
        type : String,
        required : true
    }
}]
},{
    timestamps :true
})

// userSchema.methods.getProfile = async function(){
//     const user = this
//     const userObject = user.toObject()
//     delete userObject.password;
//     delete userObject.tokens;
//     return userObject;
// }




userSchema.methods.generateJsonToken = async function ()
{
    const user =this;
    const token = jwt.sign({_id : user._id.toString()}  , 'thisisnodejs')
    
    user.tokens = user.tokens.concat({token})
    await user.save()
    
    return token;
}




userSchema.statics.findByCredentials = async (email,password) => {
    const user = await User.findOne({email})
    if(!email){
        throw new Error('unable to login')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw new Error('unable to login')
    }
    return user;
}


userSchema.pre('save', async function(next) {
    const user =this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next();
})

//delete user
userSchema.pre('remove', async function (next) {
    const user= this
    await TASK.deleteMany({owner :user._id})
    next()
})



const User = mongoose.model('User',userSchema);

module.exports = User;