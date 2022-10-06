const http = require ('http');

const url ='http://www.google.com'

const request = http.request (url,(response) => {
    let data ='';

    response.on('data',(chunk) => {
      
        data =chunk.toString()
    })

    response.on('end',() => {
        const body = JSON.stringify(data);
        console.log(body);
    })
    
})
request.end();

