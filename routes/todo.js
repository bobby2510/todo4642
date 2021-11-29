const express = require('express')
const user = require('../models/user')
const todo = require('../models/todo')
const router = express.Router()


router.post('/add/:id',async (req,res)=>{
    try{
        let user_obj = await user.findOne({_id:req.params.id})
        if(user_obj!=null)
        {
            let obj = {
                title:req.body.title,
                isDone:false, 
                user:req.params.id
            }
            let created_todo = await todo.create(obj)
            res.status(200).json(
                {
                    status:'success',
                    data: created_todo
                }
            )
        }
        else 
        {
            res.status(400).json({
                status:'fail',
                data:{
                    message:'Error while adding todo!'
                }
            })
        }
        
    }
    catch(e){
        res.status(404).json({
            status:'fail',
            err: e
        })
    }
})

router.put('/update/:id',async (req,res)=>{
    try
    {
        const todo_obj = await todo.findOne({_id:req.params.id})
        if(todo_obj!=null)
        {
            todo_obj.isDone = true 
            await todo_obj.save()
            res.status(200).json({
                status:'success',
                data:{
                    message:'todo updated successfully!'
                }
            })
        }
        else {
            res.status(400).json({
                status:'fail',
                data:{
                    message:'error while updating the todo'
                }
            })
        }
    }
    catch(e)
    {
        res.status(404).json({
            status:'fail',
            err:e
        })
    }
})

router.delete('/delete/:id',async (req,res)=>{
    try
    {
        const todo_obj = await todo.findOne({_id:req.params.id})
        if(todo_obj!=null)
        {
            await todo_obj.remove()
            res.status(200).json({
                status:'success',
                data:{
                    message:'todo removed successfully!'
                }
            })
        }
        else {
            res.status(400).json({
                status:'fail',
                data:{
                    message:'error while updating the todo'
                }
            })
        }
    }
    catch(e)
    {
        res.status(404).json({
            status:'fail',
            err:e
        })
    }
})




router.get('/current/:id',async (req,res)=>{
   try{
       todo_list = await todo.find({user:req.params.id,isDone:false})
       res.status(200).json({
           status:'success',
           data:todo_list
       })
   }
   catch(e)
   {
       res.status(404).json({
           status:'fail',
           data:{
               message:'Error occured!'
           }
       })
   }
})

router.get('/done/:id',async (req,res)=>{
    try{
        todo_list = await todo.find({user:req.params.id,isDone:true})
        res.status(200).json({
            status:'success',
            data:todo_list
        })
    }
    catch(e)
    {
        res.status(404).json({
            status:'fail',
            data:{
                message:'Error occured!'
            }
        })
    }
})


module.exports = router 