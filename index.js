const express = require('express');
const app = express()
const port = 3000


app.get("/",(req,res)=>{
    res.status(200).send({status:true,message:"get function added here"})
})

app.get("/me",(req,res)=>{
    res.status(200).send({status:true,message:"why choose me"})
})

app.listen(port,()=>{
    console.log('server connected.....!')
})