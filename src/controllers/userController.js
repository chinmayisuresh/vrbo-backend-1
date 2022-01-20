const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const router = express.Router()

router.post("/user", async (req, res)=>{
    const {email, first_name, last_name, password, id} = req.body;

if(!email || !first_name || !last_name || !password || !id){
    return res.status(422).json({error: "please fill all property"})
}
try{
 const userExist = await User.findOne({email: email})
         if(userExist){
            return res.status(422).json({error: "Email already exist"})
         }
         const user = new User({email, first_name, last_name, password, id})
         await user.save()
         res.status(201).json({message:"User registred successfully"})

}catch(err){
    console.log(err)
}
})


router.post("/login", async (req, res)=>{
    const {email, password} = req.body;

if(!email || !password){
    return res.status(422).json({error: "please fill all property"})
}
try{
 const userLogin = await User.findOne({email: email})
 if(userLogin){
     let token = await userLogin.generateAuthToken()
     res.cookie("vrbotoken", token,{
         expire:new Date(Date.now()+ 25892000000),
         httpOnly:true
     })
    const isMatch = await bcrypt.compare(password, userLogin.password)
    if(!isMatch){
       return res.status(422).json({error: "Invalid data"})
    }else{
    res.status(201).json({message:"User login successfully"})
    }

 }else{
    return res.status(422).json({error: "Invalid data"})
 }

}catch(err){
    console.log(err)
}
})

router.get("/user", async(req, res) => {

    const user = await User.find().lean().exec()

    return res.status(200).send({user})
})


module.exports= router;