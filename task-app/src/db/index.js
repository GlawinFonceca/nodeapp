const express = require('express');
const app = express();
//require('./src/db/mongoose')
const User =require('./modules/module');

const port = process.env.PORT || 3000;

app.use(express.json())

app.post('/users',(req,res) =>{
    const user = new User(req,res)
    user.save().then(() => {
        res.send(user);
    }).catch(()=>{
        res.status(400).send(e)
    })
})

app.listen(port,() =>{
    console.log('server is up on port',port)
})