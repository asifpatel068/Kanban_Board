const express =require("express");
const { TaskModel } = require("../model/taskModel");

const taskRouter=express.Router()

taskRouter.post("/",async(req,res)=>{
    try{
        const {title,description,status}=req.body;
        const date = new Date();
        const task=new TaskModel({title,description,status,Date:date});
        await task.save();
        return res.status(201).send({message:"task added successfully"});
    }
    catch(err){
        return res.status(500).send({error:err})
    }

})

taskRouter.get("/",async(req,res)=>{
    try{
        const task=await TaskModel.find();
        return res.status(200).send(task);
    }
    catch(err){
        return res.status(500).send({error:err})
    }
})


taskRouter.patch("/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const payload=req.body;
        await TaskModel.findOneAndUpdate({_id:id},payload);
        return res.status(201).send({message:"task updated successfully"});
    }
    catch(err){
        return res.status(500).send({error:err})
    }

})

taskRouter.delete("/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        await TaskModel.findOneAndDelete({_id:id})
        return res.status(201).send({message:"task deleted successfully"});
    }
    catch(err){
        return res.status(500).send({error:err})
    }
  
})

module.exports={
    taskRouter
}