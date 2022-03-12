 const mongoose= require("mongoose");

 const dbURI="mongodb://localhost:27017/TodolistV01";

 mongoose.connect(dbURI);



 //extra


const db=mongoose.connection;

 db.on('error',(err)=>{
     console.log('Error in MongoDB')
 })

 db.on('connection',()=>{
    console.log('MongoDB is Connection...')
})



// const mongoose=require('mongoose')
// const URL1='mongodb://localhost:27017/week5'



// const db =mongoose.connection

// mongoose.connect(
// URL1,{ useNewUrlParser: true },()=>{console.log('conncetion')}

// )

// db.on('error',(err)=>{
//    console.log('mongo is not running : '+err.message)
// })


// db.on('connected',con1=>{
//     console.log('..mongo  running')
// })










