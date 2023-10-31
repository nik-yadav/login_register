const express = require('express');
const router = express.Router();
const User = require('../Modal/usermodel.js');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const secretsalt = "hatakabhala"


router.post(
    "/createuser",
    async (req, res)=> {

        const salt = bcrypt.genSaltSync(10);
        const setPassword = await bcrypt.hash(req.body.password, salt)

        try {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: setPassword
            })
            res.json({success: true})
        } catch (e) {
            console.log(e);
            res.json({success: false})
        }
    }
)

router.post(
    "/loginuser",
    async (req, res) =>{
        const {email, password} = req.body;
        const usercheck = await User.findOne({email});
        res.json(usercheck);
    }
)

module.exports = router;
