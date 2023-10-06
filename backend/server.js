const express = require('express')
const fs = require('fs');
const path = require('path');
var cors = require('cors')

const app = express()
const port = 3000

app.use(express.json());
app.use(cors())
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.json({"name" : "tite"})
})

app.get('/lol', (req, res) => {
    
     const myfs = fs.readFileSync("./products.json", "utf-8")
     jsonData = JSON.parse(myfs)
     res.json(jsonData)
    
   
  })

  app.post('/lel', (req, res) => {
   let response = {data : "not found"}
   
    let email = req.body.email
    
    const myfs = fs.readFileSync("./accounts.json", "utf-8")
    const dataArray = JSON.parse(myfs);
    

    for(let i = 0; i < dataArray.length; i++){
      console.log(dataArray[i])
      if(email == dataArray[i].email){
        response.data = "found"
        response.firstName = dataArray[i].firstname
        response.lastName = dataArray[i].lastname
        response.email = dataArray[i].email
      }
    }
    res.json(response)
 })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})