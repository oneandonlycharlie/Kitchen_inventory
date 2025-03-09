// set up router to receive CRUD requests for reciepe
const { Router } = require("express")
const reciepeRouter = new Router()
// use Multer middleware to recieve img file
const multer = require("multer")
const path = require("path")
const db = require("../models/queries")

// set up image file storage 
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, "uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname + path.extname(file.originalname))
    }
})
const upload = multer({storage:storage})

// create new reciepe
reciepeRouter.post("/", upload.single("image"), (req,res)=>{
    console.log("post request recieved to create new reciepe");
    console.log(JSON.parse(req.body.data))
    console.log(req.file)
    // const entry = JSON.parse(req.body.data)
    // await db.addReciepe(entry) 
    res.json();
})

reciepeRouter.get("/", async(req,res)=>{
    console.log("request recieved to fetch all reciepes");
    const result = await db.getAllReciepes()
    res.json(result)
})

reciepeRouter.put("/",(req,res)=>{
    console.log("request recieved to update reciepe");
    console.log(req.body)
    res.json()
})

reciepeRouter.delete("/", async(req,res)=>{
    console.log("request recieved to delete item/items");
    const {type, item} = req.body
    console.log(type)
    console.log(item)
    await db.deleteReciepe(type,item)
    res.json()
})

module.exports = reciepeRouter