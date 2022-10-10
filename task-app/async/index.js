const express = require('express');
const TASK =require('./task')
const User = require('./user')
require('./app');

const app = express()
const port = process.env.PORT || 4000


app.use(express.json())

//create user
app.post('/users', async (req,res) =>{
    const user = new User(req.body)

    try{
      await user.save()
      await res.send(user);

    } catch (e){
      res.send(e)

    }
})


//read user
app.get('/users',async (req,res)=>{
   try{
    const user = await User.find({})
    if(!user){
      res.send('user not found');
    }
    res.send(user);

   }
   catch(e){
    res.status(404).send(e)

   }
})


//updaete user using patch
app.patch('/users/:id', async (req,res) => {

  const update =Object.keys(req.body);
  const allowedUpdates =['name','age','email','password'];
  const validOperation = update.every((update) =>allowedUpdates.includes(update))
  if(!validOperation){
    return res.status(404).send('invalid updates');
  } 
  try{
    const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators : true})
    if(!user){
      res.send('error');
    }
    res.send(user)

  }
  catch(e){
    res.send(e)

  }
})

//delete user
app.delete('/users/:id', async (req,res) =>{
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user){
      res.send('invalid id')
    }
    res.send(user)

  }
  catch(e){
    res.send(e);

  }
})


//create task
app.post('/tasks', async (req,res) => {

  const task = new TASK(req.body)
  try{
  await task.save();
  res.send(task)
  }
  catch(e){
    res.send(e)
  }
})


//read task
app.get('/tasks',async (req,res) => {
    try{
  const task = await TASK.find({})
  if(!task){
    res.send('task not found')
  }
  res.send(task)
}
catch (e){
  res.send(e)
}
})

//update tasks
app.patch('/tasks/:id', async (req,res) => {
  const update =Object.keys(req.body);
  const allowedUpdates = ['description','completed']
  const valid = update.every((update) => allowedUpdates.includes(update));
  if(!valid){
    res.send('invalid updates')
  }
  try{
    const task = await TASK.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators : true})
    if(!task){
      res.send('error');
    }
    res.send(task)

  }
  catch(e){
    res.send(e)

  }
})

//delete task
app.delete('/tasks/:id' , async (req,res) =>{
  try{
    const task =await TASK.findByIdAndDelete(req.params.id);
    if(!task){
      res.status(404).send('invalid id');
    }
    res.send(task)
  }
  catch(e){
    res.send(e);

  }
})


app.listen(port,() => {
    console.log('server is up on port '+port);
})