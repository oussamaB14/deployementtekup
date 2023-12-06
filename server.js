const express = require('express')
const app= express()

var bodyparser = require('body-parser')
var jsonParser = bodyparser.json()
//app.use(jsonParser)
const port =3000
app.get('/',(req,res) => res.send('hello world'))
app.listen(port,()=>{
    console.log('app listening on port ' + port)
})