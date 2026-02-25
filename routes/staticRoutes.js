const express=require('express');
const router=express.Router();
const URL=require('../models/url')


router.get('/',async (req,res)=>{
      const allURL=await URL.find({});
   
    res.render("home",{
        urls:allURL,
        name:"devraj sharma" //any number of variable we can pass
    })
})

router.get('/signup',(req,res)=>{
    res.render("signup")
})
router.get('/login',(req,res)=>{
    res.render("login")
})


module.exports=router;