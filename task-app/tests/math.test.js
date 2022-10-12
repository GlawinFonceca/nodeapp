const { calculateTip , fahrenheatToCelsius , celsiusToFahreheat ,add} = require('./math');


test ('show the total amount',() =>{
    const total = calculateTip(10,0.3);
    expect(total).toBe(13)

    // if(total !== 13){
    //     throw new Error('the total amount should be 13 .got'+total);
    // }
})

test('should convet 32 to 0 degree', () =>{
    const degree = fahrenheatToCelsius(32);
    expect(degree).toBe(0)
})

test('should convert 0 to 32 degree' , () => {
    const degree =celsiusToFahreheat(0);
    expect(degree).toBe(32);
})


// test('async demo test', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2);
//         done();
//     },2000)
// })



test('should add two numbers' , (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})


test('async/await demo test',async () => {
    const sum = await add(20,30);
    expect(sum).toBe(50);
})