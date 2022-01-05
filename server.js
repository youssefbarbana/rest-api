const express=require('express')
const app=express()

const dbconnect = require('./dbconnect')
dbconnect()
app.use(express.json());
app.use("/user",require("./routes/user"))
const port=6000
app.get('/',(req,res)=>{
    res.send('helloo')
})
app.listen(port,(err)=>{err?console.log(err):console.log('hello')})