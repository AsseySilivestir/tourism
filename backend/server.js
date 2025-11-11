require("dotenv").config()
const express = require('express')
const app = express()
const connectDB = require("./config/dbconfig")
const port = process.env.PORT||3000

//connecting to database...
connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port 127.0.0.1:${port}`)
})
