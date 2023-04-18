const express = require('express')
const { Routes } = require('react-router-dom')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
const jwtSecret = "Thisprojectismyfirstproject"

// creating a user profile

router.post("/creatuser", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password').isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        username: req.body.name,
        location: req.body.location,
        password: secPassword,
        email: req.body.email
      })
      res.json({ success: true })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })

// Login the user
router.post("/loginuser", [
  // validation details
  body('email').isEmail(),
  body('password').isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
      let userData = await User.findOne({ email })
      if (!userData) {
        return res.status(400).json({ errors: "try with correct email credentials" });
      }
      const pwdcompare = await bcrypt.compare(req.body.password,userData.password);
      console.log(req.body.password);
      console.log(userData.password);
      if (!pwdcompare) {
        return res.status(400).json({ errors: "try with correct credentials" });
      }
       const data = {
            user:{
              id:userData.id
            }
       }
       const authToken = jwt.sign(data,jwtSecret)

      res.json({ success: true,authToken:authToken })
    } catch (error) {
      console.log(error)
      res.json({ success: false })
    }
  })

// module to export the file
module.exports = router;