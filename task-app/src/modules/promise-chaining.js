require ('./app');
const { findByIdAndUpdate, countDocuments } = require('./module.js');
const TASK = require('./module.js')
 const User = require('./user');


// User.findByIdAndUpdate('6343ae0e0b26c3542d45b3f6',{age :27})
// .then((result) => {
//     console.log(result)
//     return User.countDocuments({age : 27})
// })
// .then((res) => {
//     console.log(res)
// })
// .catch((e) => {
//     console.log(e);
// })


// //challenge
// TASK.findByIdAndDelete('6343ae8b0b26c3542d45b3fa').then((result)=> {
//     console.log(result);
//     return TASK.countDocuments({completed: false});
// }).then((res) => {
//     console.log(res)
// }).catch((E) =>{
//     console.log(E)
// })

// //update using async
// const updateAgeandCount = async(id,age)=>{
//     const user = await User.findByIdAndUpdate(id,{age});
//     const count = await  User.countDocuments({age});
//     return count;

// }

// updateAgeandCount('6343ae0e0b26c3542d45b3f6',24).then((result) => {
//     console.log(result)
// }).catch((E) => {
//     console.log(E)
// })


//challenge delete

const deleteTaskandCount = async(id) => {
    const user = await TASK.findByIdAndDelete(id)
    const count = await TASK.countDocuments({completed:true})
    return count;
}

deleteTaskandCount('6343c676882c2e14ba10c937').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
