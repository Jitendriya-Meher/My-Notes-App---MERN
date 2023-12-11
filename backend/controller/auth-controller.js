const User = require("../models/user");
const bcrypt = require("bcrypt");

const loginController = async (req,res) => {

    try{

        const {email,password} = req.body;

        const userExists = await User.findOne({email});

        if( !userExists ){
            return res.status(500).json({
                message: "please sign up first",
                success: false
            });
        }

        const comparePasswords = await bcrypt.compare(password, userExists.password);

        if( !comparePasswords){
            return res.status(500).json({
                message: "passwords do not match, try again",
                success: false,
            });
        }

        const token = await userExists.generateToken();

        return res.status(200).json({
            message: "login successful",
            success: true,
            user:userExists,
            token
        });
    }
    catch(err){
        return res.status(500).json({
            message: "login fail, please try again",
            success: false
        });
    }
}

const signupController = async (req,res) => {

    try{
        const {username,email,password} = req.body;

        const userExists = await User.findOne({email});

        if( userExists){
            return res.status(400).json({
                success: false,
                message: 'User already exists please log in'
            })
        }

        const newPassword = await bcrypt.hash(password,10);

        const dbUser = await User.create({
            username,
            email,
            password: newPassword
        });
        
        return res.status(200).json({
            message: "signup successful",
            success: true,
            user: dbUser
        });
    }
    catch(err){
        return res.status(500).json({
            message: "signup fail, please try again",
            success: false
        });
    }
}

module.exports = {loginController,signupController};