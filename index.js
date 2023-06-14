const express =require("express");
const routes =require("./route/route")
const connectDB = require("./config/db");
const cors =require("cors")




const app =express()

connectDB()

app.use(express.json())

app.use(cors())

app.use("/project",routes)

app.get("/",(req,res)=>{
    res.json("runnning succesfully")
})




app.listen(4000,()=>console.log("server is runnning"));