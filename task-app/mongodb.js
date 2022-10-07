
// const mongodb =require('mongodb');
// const MongoClient = mongodb.MongoClient;


//object destructuring
const { MongoClient, ObjectId} =require('mongodb')
const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id= new ObjectId()
// console.log(id);



MongoClient.connect(connectionUrl,{ },(error,client) => {
        if(error){
            return console.log('unable to connect the database',error);
        }
        console.log('connected correctly');




        const db = client.db(databaseName);


        //insert doc
    //      db.collection('user').insertMany([{
    //         name : 'john',
    //         age : 23
    //     },{
    //         name : 'alilce',
    //         age :34
    //     }],(error,result) =>{
    //         if(error){
    //          return console.log('unable to insert user');
    //         }

    //     }) 



    //insert three objects
//     db.collection('tasks').insertMany([{
//         name :'smith',
//         cousrsecompleted : true
//     },{
//         name : 'ben',
//         cousrsecompleted : false
//     },{
//         name : 'Rob',
//         cousrsecompleted : false
//     },
// (error,result)=>{
//     if(error){

//         console.log('unable to insert documents');
//     }

// }])


//read doc 
    //  db.collection('user').findOne({name :'john'},(error,user) =>{
    //     if(error){
    //         return console.log('unable to find ')
    //     }
    //     console.log(user);
    //  })

        
    //  //fetch using id

    //  db.collection('user').findOne({_id : ObjectId('633fc8b0f48cefd56fc34135')},(error,user) =>{
    //     if(error){
    //         return console.log('unable to find user')
    //     }
    //     console.log(user)
    //  }) 
    //  console.log("\n");

    //  //read doc using find
    //  db.collection('user').find({age :23}).toArray((error,user) => {
    //     if(error){
    //         return console.log('unable to find user')
    //     }
    //     console.log(user);

    //  })


//      db.collection('user').find({ cousrsecompleted:false }).toArray((error,user) => {
//         if(error){
//             return console.log('unable to find user')
//         }
//         console.log(user);

//      })


//updating doc
  db.collection('user').updateOne({_id : ObjectId ('633fbffdc9303eb3374f444e')},
  {
    $set :{
        name :' mike'
    }
  })
  .then((result) =>{
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
  
   
  //delete doc 
  db.collection('user').deleteOne({ _id : ObjectId('633fca43c2dbf3f1dc36e3fc')}
    ).then((result) =>{
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })



    })

