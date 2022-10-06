
// // const person = (name) => {
// //     console.log(name);
// // };

// // person('john');

// // person();


// // const product ={
// //     label : 'note-book',
// //     price :30,
// //     stock : 40
// // }


// // const transaction =(type,{label,stock} ={}) => {
// //     console.log(type, label, stock)
// // };

// // transaction('order');

// console.log('hello');


// fetch('https://puzzle.mead.io/puzzle').then ((response) =>{
//     response.json().then((data) => {
//         console.log(data);
//     })
// })
// // fetch('http://localhost:3000/weather?address=boston').then ((response) =>{
// //     response.json().then((data) =>{
// //         if(data.error){
// //             return error;
// //         }
// //         console.log(response.data)
// //     })
// // })

const a = document.querySelector('form');
const search =document.querySelector('input');
a.addEventListener('submit',(e) =>{
    e.preventDefault();
    const location = search.value
    console.log(location)
})