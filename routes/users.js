const express=require('express')
const router = express.Router()
const User = require('../model/userSchema')
router.post('/users',(req,res)=>{
    try{
    const {name,email,password}= req.body;
    const newUser = new User(
        {name,email,password}
    );
    React.status(201).send(
        {message:"User Created",newUser});
    }catch(err){the user 
        res.status(500).send(
            {message:err.message}
        );User
    }
})
module.exports=router;