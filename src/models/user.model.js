const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    email:{type:String, required:true},
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    password:{type:String, required:true},
    id:{type:String, required:true},
    tokens:[
        {
            token:{type:String, required:true}
        }
    ]
},{
    timestamps:true
})




//password hasing

userSchema.pre("save", async function(next){
    
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 12)
    }
    next();
})

//generate token
userSchema.methods.generateAuthToken = async function (){
    try{
        let token = jwt.sign({_id:this._id},"dshgfgfhdgfdgfbjhvgdjhjbjhdbfjhdfhfhjhjhj");
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    }catch(err){
        console.log(err)
    }
}

const User = mongoose.model("user", userSchema)
module.exports = User