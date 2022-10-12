const express = require('express');
const userRouter = require('./user1');
const taskRouter = require('./task1');
require('./app');



const app = express()
const port = process.env.PORT | 5000




        //express middleware
// app.use((req,res,next) => {
//     if(req.method === 'GET'){
//         res.send('GET methods are disabled')
//     }
//     else{
//         next()
//     }
//     //console.log(req.method,req.path)
//    // next()
// })




     //maintenance
// app.use((req,res,next) =>{
//     res.status(504).send('server is down. try again later!')

// })
   




        //upload 
// const multer = require('multer');
// const upload =multer({
//     dest : 'images'
// });

// app.post('/upload',upload.single('upload') ,(req,res) => {
//     res.send()
// },
// (error,req,res,next) => {
//    res.status(400).send({error : error.message});
// })




app.use(express.json());
app.use(userRouter)
app.use(taskRouter)



app.listen(port,() => {
    console.log('server is up on port '+port);
})