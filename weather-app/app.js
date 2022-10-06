// console.log("Starting");

// setTimeout(() => {
//     console.log('2 second timer')
// },2000)


// setTimeout (() => { console.log('0 second timer')},0)
// console.log("Stopping");


// const request = require('request');
// const url ='http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f';


// request({url: url,json : true},(error,response)=> {
//   if(error){
//     console.log("unable to  connect to  weather service")
//   }else if(response.body.error){
//     console.log('unable to find location')
//   }
//   else{

//     // console.log(response.body.current);
//   console.log('it is currently'+ " " +response.body.current.temperature +" "+ "degrees out. it feels like" +" "+response.body.current.feelslike+" " +'degrees out');

//   }



// })


// const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({url:url1,json: true},(error,response) =>{
//   if(error){
//     console.log('unable to connect locatin services');
//   }else if(response.body.features.length ===0){
//     console.log('location not found');
//   }
//   else{
//     console.log(response.body.features);
//   }
//   })




const request = require('request');
const forecast = (address1,address2,callback) =>{
const url ='http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + address1 +','+ address2 +'&units=f';


request({url: url,json : true},(error,response)=> {
  if(error){
   callback("unable to  connect to  weather service",undefined)
  }else if(response.body.error){
    callback('unable to find location',undefined)
  }
  else{

    // console.log(response.body.current);
  callback(undefined,'it is currently'+ " " +response.body.current.temperature +" "+ "degrees out. it feels like" +" "+response.body.current.feelslike+" " +'degrees out');

  }



})
}

module.exports = forecast;