const express = require('express');
const userRouter = require('./user1');
const taskRouter = require('./task1');
require('./app');

const app = express()
const port = process.env.PORT || 5000


app.use(express.json());
app.use(userRouter)
app.use(taskRouter)



app.listen(port,() => {
    console.log('server is up on port '+port);
})