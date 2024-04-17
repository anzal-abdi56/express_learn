const express = require("express")

const mongoose = require("mongoose")
const itemRoute = require("./routes/items.route")

const app = express()
const PORT = 5550

// middlewares
app.use(express.json())

// routes 
app.use("/api/items", itemRoute)




mongoose.connect("mongodb://localhost:27017/my_db")
.then(()=>{
    console.log("Database is connected successfully")
    app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})
    }
);