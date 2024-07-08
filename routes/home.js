const express = require('express');
const router = express.Router('express');


router.get('/home',(req,res,next)=>{
    res.send(`<h1>This is your login page API Here</h1>`)
})
module.exports=router;