const mongoose = require('mongoose')


const userShema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports = new mongoose.model('user',userShema)