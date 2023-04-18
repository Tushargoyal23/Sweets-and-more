const express = require('express')
const { Routes } = require('react-router-dom');
const router = express.Router()
//calling the router
router.post('/foodData',(req,res)=>{
    try{
        //sending the globalized data in response so that it can be use further
        res.send([global.food_items,global.foodCategory]);
    }catch{
        res.send("server error");
    }
})

// module to export the file
module.exports = router;