const bodyParser = require('body-parser');
const express = require('express')
const app = express();
require('./helper/dbconnection');
const config = require('./helper/config');
const PORT= config.app.port

const userrouter = require('./router/user')
const prorouter  = require('./router/product')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())

app.use('/user',userrouter)
app.use('/product',prorouter)


app.listen(PORT,function(){
    console.log(`Server is listening to the port ${PORT}`)
})