const mongoose = require('mongoose');



const TASK = mongoose.model('Task',{
    description : {
        type: String,  
        require : true,
             
    },
    completed :{
        type : Boolean,
        require :true
    }
})



module.exports =TASK;