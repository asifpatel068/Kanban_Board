const express =require("express");
const { connection } = require("./config/db");
const { taskRouter } = require("./routes/taskRoutes");
const cors=require("cors")

const app=express()
const port=6060
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/task",taskRouter);

app.listen(port,async()=>{
    try{
        await connection
        console.log("Connected to MongoDB")

    }catch(err){
        console.log(err)
        console.log("Not Connected to DB")
    }
    console.log(`Server is Running at port ${port}`)
})