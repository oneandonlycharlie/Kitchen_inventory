// set up express app
const express = require("express")
const app = express()

// add middleware to parse URLs
app.use(express.urlencoded({extended:false}))

// use environment variables
require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`)
})

