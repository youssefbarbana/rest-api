const mongoose=require('mongoose')

const schema=mongoose.Schema
const userSchema=new schema({
    name:String,
    email:{type:String,unique:true},
    isAdmin:{type:Boolean , default:false}
})
const user=mongoose.model("user",userSchema)
module.exports=user