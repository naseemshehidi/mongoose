const express=require("express");
const User = require("../models/user");
const userRouter=express.Router();
userRouter.post("/add",async(req,res)=>{
    try
    {
        let newUser=new User(req.body);
        let result= await newUser.save();
        res.send({user:result,msg:"msg is added"});
    }catch(error){
        console.log(error);
    };
});
userRouter.get("/",async(req,res)=>{
    try
    {
        let result= await User.find();
        res.send({user:result,msg:"all users"});
    }catch(error){
        console.log(error);
    };
});
userRouter.get("/:id",async(req,res)=>{
    try
    {
        let result= await User.findById(req.params.id);
        res.send({user:result,msg:"all users"});
    }catch(error){
        console.log(error);
    };
});
userRouter.delete("/:id",async(req,res)=>{
    try
    {
        let result= await User.findByIdAndDelete(req.params.id);
        res.send({user:result,msg:"user deleted"});
    }catch(error){
        console.log(error);
    };
});
userRouter.put("/:id",async(req,res)=>{
    try
    {
        let result= await User.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}});
        res.send({user:result,msg:"user is updated"});
    }catch(error){
        console.log(error);
    };
});
module.exports=userRouter;