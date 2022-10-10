const mongoose = require('mongoose');
const validator =require('validator')

const User = mongoose.model('User',{// data validation
    name :{
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

module.exports = User;