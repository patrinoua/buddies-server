const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 5000
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/api/hello', (req,res)=>{
  res.send({express:"Hello from express"})
})

app.post('/api/world',(req,res)=>{
  console.log(req.body)
  res.send(`I received your POST request, this is what you sent ${req.body.post}`)
})
app.get('/', function(req, res) {
  res.sendStatus(200)
})
// app.listen(port,()=>console.log('Listening on port...', port))
app.listen(port, () => console.log("Backend server live on " + port));
