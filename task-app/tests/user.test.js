const request =('supertest');
const app =require('../async/index')
require('../bcrypt/app')


test('should signup a new user', async() => {
    await request(app).post('/users').send({
        name : 'john',
        age :23,
        email :'john1@gmail.com',
        password :'john@112'
    }).except(200)
})