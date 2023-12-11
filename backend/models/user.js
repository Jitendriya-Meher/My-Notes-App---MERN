const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

// json web token
userSchema.methods.generateToken = async function(){

    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        },
        process.env.JWY_SECRET_KEY,{
            expiresIn:"2d",
        }
        );
    }
    catch(err){
        console.log("error generating in token",err);
    }
};

const User = new model("User",userSchema);
module.exports = User;