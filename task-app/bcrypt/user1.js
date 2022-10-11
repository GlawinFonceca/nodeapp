const User = require('./user')
const auth  = require('./auth')
const express = require('express');


const router = new express.Router()


//create user
router.post('/users', async (req,res) =>{
    const user = new User(req.body)

    try{
      await user.save()
      const token = await user.generateJsonToken()
      res.send({user , token});
      await res.status(201).send(user);

    } catch (e){
      res.status(400).send(e)

    }
})







// user login
router.post('/users/login' , async (req,res) => {
  try{
  const user = await User.findByCredentials(req.body.email,req.body.password);
  // const token = await user.generateJsonToken()
  res.send({ user :user.getProfile(), token});
   
  }
  catch(e){
    res.status(404).send('not found')
  }
})







//logout user
router.post('/users/logout',auth, async (req,res) => {
  try{
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token
    })
    await req.user.save()
    res.send()

  }
  catch(e){
    res.status(500).send()
  }
})









//logout all
router.post('/users/logoutall',auth, async (req,res) =>{
  try{
    req.user.tokens =[]
    await req.user.save()
    res.send('success')
  }
  catch(e){
    res.status(500).send('error')

  }
})







//read user
router.get('/users/me',auth ,async (req,res)=>{
   try{
    // const user = await User.find({})
    // if(!user){
    //   res.send('user not found');
    // }
    res.send(req.user);

   }
   catch(e){
    res.status(404).send(e)

   }
})








//updaete user using patch
router.patch('/users/me',auth, async (req,res) => {

  const updates =Object.keys(req.body);
  const allowedUpdates =['name','age','email','password'];
  const validOperation = updates.every((update) =>allowedUpdates.includes(update))

  if(!validOperation){
    return res.status(404).send('invalid updates');
  } 

  try{
   // const user = await User.findByIdAndUpdate(req.params.id)
    updates.forEach((update) => {
      user[update]=req.body[update];
     
    })

    await req.user.save();
    //const user = await User.findByIdAndUpdate(req.params.id,req.body,{new : true,runValidators : true})
    if(!user){
      res.send('error');
    }
    res.send(req.user)

  }
  catch(e){
    res.send(e)

  }
})







//delete user
router.delete('/users/me',auth, async (req,res) =>{
  
  try{
    // const user = await User.findByIdAndDelete(req.params.id);
    // if(!user){
    //   res.send('invalid id')
    // }
    // res.send(user)
    await req.user.remove()
    res.send(req.user)


  }
  catch(e){
    res.send(e);

  }
})


module.exports=router;