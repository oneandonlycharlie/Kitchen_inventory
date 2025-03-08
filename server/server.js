// set up express app
const express = require("express")
const app = express()
const reciepeRouter = require("./controllers/reciepeRouter.js")

// add middleware to parse URLs
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// direct to reciepe controller
app.use("/reciepe", reciepeRouter);
app.use("/", (req,res)=>{
    console.log("recieved at main router")
    console.log(req.body)
    res.send()
})

// use environment variables
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`)
})

