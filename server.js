const express=require('express')

const app= express()


const db=require('./db1')
const Todo=require('./SC/todo')

app.get("/",(req,res)=>{
    res.json('get/is working')
})


app.listen(5000,()=>{
    console.log('server is working')
})