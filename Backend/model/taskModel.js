const mongoose=require("mongoose");

const taskSchema=mongoose.Schema({
    title:String,
    description:String,
    status:String,
    Date:Date
},{
    versionKey:false
})

const TaskModel=mongoose.model("task",taskSchema)

module.exports={
    TaskModel
}