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

module.exports=router;