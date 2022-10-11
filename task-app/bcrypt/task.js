const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description : {
        type: String,  
        require : true,
             
    },
    completed :{
        type : Boolean,
        require :true
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
      
    }
},{
    timestamps:true
})

const TASK = mongoose.model('Task',taskSchema)



module.exports =TASK;