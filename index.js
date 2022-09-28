require('dotenv').config()
const express = require('express')
const mysql = require('mysql2')
const bodyparser = require('body-parser')
// const res = require('express/lib/response')
const app = express ()
const port = 3000

const users = [
  {id:1,
   firstname: "Ade",
   lastname:  "Detola",
   occupation: "janitor",
   age: 32
  },
  {id:2,
     firstname: "Adeola",
     lastname:  "Woleola",
     occupation: "barber",
     age: 32
  },
  {id:1,
     firstname: "Timipre",
     lastname:  "Hassan",
     occupation: "Attorney",
     age: 57
  },


]

app.use(bodyparser.json())


const connection = mysql.createConnection({
  host     : process.env.DATABASE_HOST,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD,
  database_port : process.env.DATABASE_PORT,
  database_host : process.env.DATABASE_HOST
});
 
connection.connect()





 app.listen(port, ()=>{
     console.log(`listening on port ${port}`)
 });

 app.get('/customers', (req,res) =>{
     res.status(200).send
 })

 

 app.post('/carrymedeygo', (req, res) => {



const firstname = req.body.firstname
const lastname = req.body.lastname
const email = req.body.email
const phone = req.body.phone

//   const data = {
//       "firstname" : "",
//       "lastname" : "",
//       "email" : "",
//       "phone" : ""

//   }
if(!firstname || !lastname || !email || !phone){
  res.status(400).send({
          message:'please fill all fields'
})
} else{
  //  console.log(`data: ${firstname} ${lastname} ${email} ${phone}`)
   res.status(201).send({
       message: 'created successfully'
   })
}
})
