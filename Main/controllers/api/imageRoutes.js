const router = require('express').Router();
const { Image } = require('../../models');
const path=require('path');


router.post('/',(req,res)=>{

  console.log(req.file);
});







// router.create=(req,res)=>{
// const imageTempPath=req.file.path;  
// const ext=path.extname(req.file.originalname).toLocaleLowerCase();
// const targetPath=path.resolve(`main/public/upload/test${ext}.`);
// console.log(ext);
// console.log(req.file);


      
    
  module.exports = router;