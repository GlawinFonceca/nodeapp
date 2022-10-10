const User = require('./user')
const express = require('express');


const router = new express.Router()


//create user
router.post('/users', async (req,res) =>{
    const user = new User(req.body)

    try{
      await user.save()
      await res.send(user);

    } catch (e){
      res.send(e)

    }
})


//read user
router.get('/users',async (req,res)=>{
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
router.patch('/users/:id', async (req,res) => {

  const updates =Object.keys(req.body);
  const allowedUpdates =['name','age','email','password'];
  const validOperation = updates.every((update) =>allowedUpdates.includes(update))
  if(!validOperation){
    return res.status(404).send('invalid updates');
  } 
  try{
    const user = await User.findByIdAndUpdate(req.params.id)
    updates.forEach((update) => {
      user[update]=req.body[update];
      user.save();
    })

    //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators : true})
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
router.delete('/users/:id', async (req,res) =>{
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


module.exports=router;