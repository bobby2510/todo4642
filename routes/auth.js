const express = require('express')
const user = require('../models/user')
const router = express.Router()


router.post('/login',async (req,res)=>{
    try{
        let user_obj = await user.findOne({email: req.body.email})
        if(user_obj==null)
        {
            res.status(201).json({
                status:'success',
                data:{
                    message:'Invalid Email!'
                }
            })
            return 
        }
        //checking for password validation 
        if(user_obj.password === req.body.password)
        {
            res.status(200).json({
                status:'sucess',
                data: {
                    name:user_obj.name,
                    id:user_obj.id
                }
            })
        }
        else {
            res.status(201).json({
                status:'success',
                data:{
                    message: 'Invalid Password!'
                }
            })
        }
    }
    catch(e){
        res.status(404).json({
            status:'fail',
            data:{
                message:'Error occured!',
                err:e
            }
        })
    }
})

router.post('/register',async (req,res)=>{
    try{
        console.log(req.body)
        let obj = {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password 
        }
        let res_obj = await user.create(obj)
        if(res_obj!=null)
        {
            res.status(200).json({
                status:'success',
                data:{
                    message:'user registered successfully!'
                }
            })
        }
        else 
        {
            res.status(400).json({
                status:'success',
                data:{
                    message:'Failed to create the account!'
                }
            })
        }

    }
    catch(err){
        res.status(404).json({
            status:'fail',
            data:{
                message:'Error occured!',
                err:err 
            }
        })
    }
})

router.delete('/logout',async (req,res)=>{
    res.status(200).json(
        {
            status:'success',
            data:{
                'message':'user logged out successfully!'
            }
        }
    )
})

module.exports = router 