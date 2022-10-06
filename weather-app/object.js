//objects destructuring

const name = 'john';
const age = 30;


const user ={
    name,
    age : age,
    location : 'mangaluru'
}

console.log(user)

const product ={
    label : 'note-book',
    price : 25,
    stock : 100,

}

const {label,stock} = product;
console.log (label,`\n`,stock);


const transaction =(type, {label,stock}) => {
    console.log(type, label, stock)
}
transaction('order',product)