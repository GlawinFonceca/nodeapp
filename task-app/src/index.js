const express = require('express');
const TASK =require('./modules/module')
const User = require('./modules/user')
require('./modules/app');

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.post('/users', (req,res) =>{
    const user = new User(req.body)
  
    user.save().then(() =>{
      res.send(user)
    })
    .catch((e)=>{
      console.log('error',e)

    })
})



app.get('/users',(req,res)=>{
  User.find({}).then((users)=>{
    res.send(users)
  }).catch((e) =>{
    res.status(400).send(e)
  })
})


app.post('/tasks',(req,res) => {

  const task = new TASK(req.body)

  task.save().then(() =>{
    res.send(task)
  })
  .catch((e)=>{
    console.log('error',e)

  })
})

app.get('/tasks',(req,res) => {

 TASK.find({}).then((tasks)=>{
  res.send(tasks)
 }).catch((e)=>{
  res.status(404).send(e);
 })
})

app.listen(port,() => {
    console.log('server is up on port '+port);
})