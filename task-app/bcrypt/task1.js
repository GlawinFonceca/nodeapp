const express = require('express');
const TASK =require('./task')
const auth = require('./auth')

const router = new express.Router()


//create task
router.post('/tasks',auth, async (req,res) => {

   // const task = new TASK(req.body)

    const task = new TASK ({
      ...req.body,
      owner: req.user._id


    })

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
  router.patch('/tasks/:id',auth, async (req,res) => {

    const updates =Object.keys(req.body);
    const allowedUpdates = ['description','completed']
    const valid = updates.every((update) => allowedUpdates.includes(update));

    if(!valid){
      res.send('invalid updates')
    }

    try{

      //const task =await TASK.findByIdAndUpdate(req.params.id);

      const task = await TASK.findByIdAndUpdate({_id: req.params.id,owner : req.user.id})
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
  router.delete('/tasks' , auth,async (req,res) =>{
    try{
     // const task =await TASK.findByIdAndDelete(req.params.id);

     const task = await TASK.findByIdAndDelete({_id : req.params.id,owner:req.user._id})
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