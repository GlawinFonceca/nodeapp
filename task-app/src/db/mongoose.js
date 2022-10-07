const mongoose = require('mongoose');
const validator =require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


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

const use = new User({
    name :'    smith',
    age :30,
    email :'  smith@email.com',
    password : 'Smithat1'
})

use.save()
.then(() =>{
    console.log(use);
})
.catch((error) =>{
    console.log('error',error)
})


// const TASK = mongoose.model('TASK',{
//     description : {
//         type: String
//     },
//     completed :{
//         type : Boolean
//     }
// })

// const task = new TASK({
//     description :'learn node js',
//     completed : true
// })

// task.save()
// .then((result) =>{
//     console.log(result)
// })
// .catch((error) =>{
//     console.log(error);
// })