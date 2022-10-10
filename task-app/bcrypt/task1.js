const express = require('express');
const TASK =require('./task')

const router = new express.Router()


//create task
router.post('/tasks', async (req,res) => {

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
  router.get('/tasks',async (req,res) => {
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
  router.patch('/tasks/:id', async (req,res) => {
    const updates =Object.keys(req.body);
    const allowedUpdates = ['description','completed']
    const valid = updates.every((update) => allowedUpdates.includes(update));
    if(!valid){
      res.send('invalid updates')
    }
    try{
      const task =await TASK.findByIdAndUpdate(req.params.id);
      updates.forEach((update) => {
        task[update]=req.body[update];
        task.save()
      })




      //const task = await TASK.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators : true})
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
  router.delete('/tasks/:id' , async (req,res) =>{
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


  module.exports = router