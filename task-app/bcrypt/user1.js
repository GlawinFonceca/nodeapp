const User = require('./user')
const auth  = require('./auth')
const express = require('express');
const multer = require('multer');
// const sharp = require('sharp')




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




//upload avatar

const upload = multer({
  // dest : 'avatars',
  limits : {
    fileSize : 1000000
  },
  fileFilter (req, file ,callback) {
    //if(file.originalname.endsWith('.pdf')){
      if(!file.originalname.match(/.(png|jpg|jpeg)$/)){
      return callback( new Error ('please upload images'))
    }
    callback( undefined,true)

  }
})

router.post('/user/me/avatar',auth, upload.single('avatar'), async (req,res) => {
  req.user.avatar =req.file.buffer
  // const buffer = await sharp(req.file.buffer).resize({height:250 , width :250}).png().toBuffer();
  // req.user.avatar=buffer;
  await req.user.save();
  res.send()
},(error,req,res,next) => {
  res.status(400).send({ error: error.message});
})




//delete avatar
router.delete('/user/me/avatar', auth , async(req,res) => {
  req.user.avatar= undefined
  await req.user.save();
  res.send()
},
(error,req,res,next) => {
  res.status(400).send(' avatar not found')
})


//read avatar
router.get('/user/:id/avatar', async(req,res)=> {
  try{
    const user = await User.findById(req.params.id);
    if(!user || !user.avatar){
      throw new Error()
    }
    res.set('Content-Type','image/jpg')
    res.status(200).send(user.avatar)


  }
  catch(e){
    res.status(400).send()
  }
})





module.exports=router;