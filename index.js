const express = require("express");
const serverless = require("serverless");
const app = express();
const router = express.Router();
let port = process.env.PORT || 3000


app.get("/", (req,res)=>{
  res.send("Hello world");
})

app.post("/notification", (req,res)=>{
  res.send(`notification received: ${req.body}`)
})

// app.use('/.netlify/functions/api', router)
// module.exports.handler = new serverless(app)

app.listen(port, ()=>{
  console.log(`example app is listening on port ${port}`)
})