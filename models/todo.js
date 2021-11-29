const mongoose = require('mongoose')


const todoShema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
    },
    isDone:{
        type:Boolean,
        required:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports = new mongoose.model('todo',todoShema)