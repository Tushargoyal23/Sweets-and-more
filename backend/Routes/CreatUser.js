const express = require('express')
const { Routes } = require('react-router-dom')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
router.post("/creatuser",[
body('email').isEmail(),
body('name').isLength({ min: 5 }),
body('password').isLength({ min: 5 })],
 async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
       await User.create({
            username:req.body.name,
            location:req.body.location,
            password:req.body.password,
            email:req.body.email
       }) 
       res.json({success:true})
    }catch(error){ 
        console.log(error)
        res.json({success:false})
    }
})
router.post("/loginuser",[
  body('email').isEmail(),
  body('password').isLength({ min: 5 })],
   async (req,res)=>{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let email = req.body.email;
      try {
        let userData =  await User.findOne({email}) 
         if(!userData){
          return res.status(400).json({ errors: "try with correct credentials"});
         }
         if(userData.password !== req.body.password){
          return res.status(400).json({ errors: "try with correct credentials"});
         }
         res.json({success:true})
      }catch(error){ 
          console.log(error)
          res.json({success:false})
      }
  })
module.exports = router;