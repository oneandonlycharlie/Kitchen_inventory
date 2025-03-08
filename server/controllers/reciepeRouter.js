// set up router to receive CRUD requests for reciepe
const { Router } = require("express")
const reciepeRouter = new Router()
const db = require("../models/queries")


// create new reciepe
reciepeRouter.post("/", async(req,res)=>{
    console.log("post request recieved to create new reciepe");
    console.log(req.body)
    await db.addReciepe(req.body) 
    res.json();
})

reciepeRouter.get("/", async(req,res)=>{
    console.log("request recieved to fetch all reciepes");
    const result = await db.getAllReciepes()
    res.json(result)
})

reciepeRouter.put("/", (req,res)=>{
    console.log("request recieved to update reciepe");
    console.log(req.body)
    res.json()
})

module.exports = reciepeRouter