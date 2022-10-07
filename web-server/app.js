const express = require('express');
const { dirname } = require('path');
const app =express();
const path = require('path');
const hbs = require('hbs');
const { get } = require('http');
const port = 3000;

//define path to expresss config
const path1 = path.join( __dirname,'../web-server/public');
const viewPath = path.join(__dirname, '../web-server/public/views');
const headerPath =path.join(__dirname, '../web-server/public/views/partials');



//setup handlers engine and views
app.set('view engine','hbs')
app.set('views', viewPath);
hbs.registerPartials(headerPath);

//setup static directory serve
app.use(express.static(path1))




app.get('',(req,res) =>{
    res.render('index',{
        title: 'weather app'
    })
})


app.get('/help',(req,res) => {
    res.render('help',{
        title :'help page',
        name : 'john'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'about page',
        name : 'john'
    })
})

app.get('/weather',(req,res) => {
        if(!req.query.address){
          return   res.send('Error : you must provide address');
        }

    res.send ({
        location :`mangaluru`,
        forecast : 'it is 24 degree out ',
        address : req.query.address
        
    });
})

//request query 
app.get('/products',(req,res )=> {

    if(!req.query.search){
     return res.send('Error : you must provide search')
    }
    console.log(req.query)
    res.send({
        product: []
    })
})

//for error
app.get('*',(req,res) => {
    res.send('404 page not found');

})

app.listen(port,() => {
    console.log('server is up on port '+port);
})