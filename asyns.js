// const doWork = async() => {
//     return 'john'
// }

// doWork().then((result) => {
//     console.log(result)
// }).catch((e)=> {
//     console.log(e)
// })



const add = (a,b) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve( a + b);

        },2000)
    })
} 


const doThings = async() => {
    const sum = await add(100,50);
    const sum2 = await add(sum,10)
    const sum3 = await add(sum2,10);
    return sum3;
}

doThings().then((result) => {
    console.log(result)
}).catch((e)=>{
    console.log(e);
})