const mongoose =require('mongoose')

module.exports = mongoose.connect(process.env.DB,(err)=>{
    if(err)
    {
        console.log('connection error')
    }
    else{
        console.log('Database Connected')
    }
})