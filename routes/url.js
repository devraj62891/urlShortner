const express=require('express');
const router=express.Router();
const {handleGenerateNewShortURL, handleRedirectRequest}=require('../controller/url')


router.post('/',handleGenerateNewShortURL)
router.get('/:shortId',handleRedirectRequest);





module.exports=router;