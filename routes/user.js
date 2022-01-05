const express=require('express')
const user = require('../modules/schema')
const userRouter=express.Router()

//post a new user
userRouter.post("/add",async(req,res)=>{
    try {
        const newUser=new user(req.body);
        let result=await newUser.save();
        res.send({user:result,msg:"user added seccessfully"})
    } catch (error) {
        console.log(error);
    }
})
//get 
userRouter.get("/",async(req,res)=>{
    try {
        let result=await user.find();
        res.send({users:result,msg:"all users"})
    } catch (error) {
        console.log(error)
    }
})
//get by id
userRouter.get("/:id",async(req,res)=>{
    try {
        let result=await user.findById({_id:req.params.id});
        res.send({users:result,msg:"user"})
    } catch (error) {
        console.log(error)
    }
})
//delete
userRouter.delete("/:id",async(req,res)=>{
    try {
        let result=await user.findByIdAndDelete({_id:req.params.id});
        res.send({msg:"user deleted"})
    } catch (error) {
        console.log(error)
    }
})
//update
userRouter.put("/:id",async(req,res)=>{
    try {
        let result=await user.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({msg:"user deleted"})
    } catch (error) {
        console.log(error)
    }
})
module.exports=userRouter