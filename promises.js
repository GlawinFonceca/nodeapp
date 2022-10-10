// //promises
// const doWork = new Promise((resolve,reject) =>{
//      resolve('success!');
//     reject('things went wrong');
    
// })
// doWork.then((result) => {
//     console.log(result);
// }).catch((error) =>{
//     console.log(error);
// })



// //callback
// const toDo = (callback) => {
//    callback('hello')
// }

// toDo((error,result) => {
//     if(error){
//         return console.log(error)
//     }
//     console.log(result)
// })


//promise chaining

const add = (a,b) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve( a + b);

        },2000)
    })
} 

add (2,2)
.then((sum) =>  {
    console.log(sum);
    return add(sum,2)
})
.then((sum2) => {
    console.log(sum2)
    return add(sum2,2)
})
.then((sum3) =>{
    console.log(sum3)
})
.catch((e) => {
    console.log(e);
})