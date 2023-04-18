const express = require('express')
const { mongo } = require('mongoose')
const app = express()
const port = 5000
const mongoDB = require("./db")
mongoDB();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use(
  express.urlencoded({ extended: true })
);
app.use(express.json())
// link for calling creat user from frontend
app.use('/api',require('./Routes/CreatUser'))
// link for displaying data from frontend
app.use('/api',require('./Routes/DisplayData'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})