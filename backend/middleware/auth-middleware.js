const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
const User = require("../models/user");
dotenv.config();

const authMiddleware = async(req,res,next) => {

    const token = req.headers.authorization;
    // console.log("token", token);

    if( !token){
        return res.status(200).json({
            message:'unauthenticated http, token not provide',
            success: false,
            token: token
        })
    }
    // console.log("token: " , token);

    const jwtToken = token.replace("Bearer ","").trim();
    // console.log("jwt token: " , jwtToken);

    try{

        const isVerified = jwt.verify(jwtToken,process.env.JWY_SECRET_KEY);

        // console.log("verify token: " , isVerified);

        const userData = await User.findOne({
            _id:isVerified.userId
        }).select({
            password:0
        });

        if( !userData){
            return res.status(200).json({
                message:"User not found",
                success:false
            });
        }

        // console.log("userData", userData);

        req.userID = userData._id;
        
        next();
    }
    catch(err){
        return res.status(200).json({
            msg:"error in token",
            error:err.message,
            success:false
        })
    }
};

module.exports = authMiddleware;