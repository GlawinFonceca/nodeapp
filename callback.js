setTimeout(() => {
    console.log("hello world")
},5000)



const person = (address,callback) =>{
    setTimeout(() =>{
        const data ={
            name : 'john',
            age : 30 , 
            address :  address       
        }
        callback(data);
    }, 2000);

}

person('mangaluru',(data) => {
    console.log(data);
})



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


const add = (n1,n2,callback) =>{
    setTimeout(() =>{
    
        
        callback(n1+n2)
    },2000)

}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})