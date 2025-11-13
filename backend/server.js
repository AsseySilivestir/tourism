require("dotenv").config()
const express = require('express')
const app = express()
const path = require("path")
const connectDB = require("./config/dbconfig")
const port = process.env.PORT||3000
const frontendPath = path.join(__dirname, './../tce_frontend/dist')
const user = require("./models/users")

//middleware
app.use(express.json()) 
//serving static files from the dist dir...(frontend build)
app.use(express.static(frontendPath,{index:false}))
/*
* Even this opt works...does same thing as app.use(express.static(frontendPath,{index:false}))
app.use('/assets', express.static(path.join(frontendPath, 'assets')));
*/

//connecting to database...
connectDB()
/*app.get("/",(req,res)=>{
  res.send("<h1>Hello world</h1>")
  console.log('working')
})*/

//creating a user
const createUser = async ()=>{
try{
  const newUser =new user(
  {
    first_name: "Ezekiel",
    last_name: "Minja",
    username: "minjaezekiel",
    email: "ezekielminja@gmail.com",
    password: "123456789",
    isAdmin: true
  }
)
await newUser.save()
console.log(`New user created: \n ${newUser}`)
}catch(err){
  console.error(`Error creating user: \n ${err.message}`)
}
} 
//createUser();

/*
 *splat matches any path without the root path. If you need to match the root 
 * path as well /, you can use /{*splat}, wrapping the wildcard in braces.
 * for more info, read expressjs docs 
 * */
app.get('/{*splat}', (req, res) => {
  //console.log("Catch-all route hit. Sending file:", path.join(frontendPath, "index.html"));
  res.sendFile(path.join(frontendPath, "index.html"));
}); 

//to run the server, type in command prompt npm run devStart
//note that you must be in the same directory as the backend/server.js
app.listen(port, () => {
  console.log(`Example app listening on port 127.0.0.1:${port}/`)
})
