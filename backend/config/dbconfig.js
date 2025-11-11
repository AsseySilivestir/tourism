require("dotenv").config()
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI
const user = process.env.MONGO_USER
const pass = process.env.MONGO_PASS
const host = process.env.MONGO_HOST


const connectDB = async ()=>{
    try{
        //connect to mongodb
        const conn = await mongoose.connect(`mongodb+srv://${user}:${pass}@${host}`)
        console.log(`Connected to MongoDB successfully...`)
    }catch(error){
        //if mongoDB connection fails, display error...
        console.error(`Error connecting to database..., ${error.message}`)
        //exiting process with a failure
        process.exit(1)

    }
}

module.exports = connectDB;