//promises
const doWork = new Promise((resolve,reject) =>{
     resolve('success!');
    reject('things went wrong');
    
})
doWork.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
})

//callback


const toDo = (callback) => {
   callback('hello')
}

toDo((error,result) => {
    if(error){
        return console.log(error)
    }
    console.log(result)
})