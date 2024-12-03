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

app.get('/products/:id', (req,res) =>{
  const requestId = req.params
  const myfs = fs.readFileSync("./products.json", "utf-8")
  jsonData = JSON.parse(myfs)
  console.log(requestId)

  for(let i = 0; i < jsonData.length; i++){
    
  }
})

  app.post('/login', (req, res) => {
   let response = {data : "not found"}
   
    let email = req.body.email
    
    const myfs = fs.readFileSync("./accounts.json", "utf-8")
    const dataArray = JSON.parse(myfs);  
    

    for(let i = 0; i < dataArray.length; i++){
     
      if(email == dataArray[i].email){
        response.data = "found"
        response.firstName = dataArray[i].firstname
        response.lastName = dataArray[i].lastname
        response.email = dataArray[i].email
      }
    }
    res.json(response)
 })

 app.post('/signup', (req,res) =>{
   const response = {
         data : "pending"
   }
   const newAccount = {
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email,
    password : req.body.password
   }
  
   const Accounts = fs.readFileSync("./accounts.json", "utf-8")
   const AccountsArray = JSON.parse(Accounts);

   for(let i = 0; i < AccountsArray.length; i++){
     if(newAccount.email == AccountsArray[i].email){
      response.data = "exist"
     }
   }
   if(response.data != "exist"){
    AccountsArray.push(newAccount)
    try{
     fs.writeFileSync("./accounts.json", JSON.stringify(AccountsArray,null, 2), 'utf-8');
     response.data = "posted"
    }
    catch(e){
      console.log(e)
    }
   }
   res.json(response)

 }) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})