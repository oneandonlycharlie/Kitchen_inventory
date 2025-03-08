// set up router to receive CRUD requests for reciepe
const { Router } = require("express")
const reciepeRouter = new Router()


// create new reciepe
reciepeRouter.post("/", (req,res)=>{
    console.log("post request recieved to create new reciepe");
    console.log(req.body)
    res.json()
})

reciepeRouter.put("/", (req,res)=>{
    console.log("request recieved to update reciepe");
    console.log(req.body)
    res.json()
})

module.exports = reciepeRouter