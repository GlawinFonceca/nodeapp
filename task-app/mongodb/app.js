const { MongoClient, ObjectId} =require('mongodb')
const url = 'mongodb://127.0.0.1:27017';
const database = 'app1';

MongoClient.connect(url,{},(error,client) =>{
   if(error){
    return console.log('error');
   }
   console.log('connected to the database');

const db = client.db(database);

//insert
db.collection('user').insertMany([
    {
        name : 'john',
        age : 23,
        city : 'mangaluru'
    }
],(error,user)=>{
    if(error){
        return console.log('unable to connect the database')
    }



    //find
    db.collection('user').findOne({name : 'john'},
    (error,result) => {
        if(error){
           return console.log('not found');
        }
        console.log(result)
    }
    )
})


})


