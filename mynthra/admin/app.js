const bodyParser = require('body-parser');
const express = require('express')
const app = express();
require('./helper/dbconnection');
const config = require('./helper/config');
const PORT=config.app.port

const admin_router = require('./router/admin')
const produc_router = require('./controller/product')


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.json())


app.use('/admin',admin_router)
app.use('/product',produc_router)

app.listen(PORT,function(){
    console.log(`Server is listening to the port ${PORT}`)
})