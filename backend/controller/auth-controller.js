const Note = require("../models/note");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const loginController = async (req,res) => {

    try{
        const {email,password} = req.body;

        const userExists = await User.findOne({email});

        if( !userExists ){
            return res.status(200).json({
                message: "please sign up first",
                success: false
            });
        }

        const comparePasswords = await bcrypt.compare(password, userExists.password);

        if( !comparePasswords){
            return res.status(200).json({
                message: "passwords doesn't match, try again",
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
        return res.status(200).json({
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
            return res.status(200).json({
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
        return res.status(200).json({
            message: "signup fail, please try again",
            success: false
        });
    }
}

const deleteAccount = async (req, res) => {
    try{
        const userID = req.userID;

        const delNotes = await Note.deleteMany({userID});
        const delAcc = await User.findByIdAndDelete(userID);

        return res.status(200).json({
            message:"account deleted successfully",
            success: true,
            note:delNotes,
            user:delAcc
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while deleting user account",
            success:false
        });
    }
}

const editProfile = async (req, res) => {
    try{
        const userID = req.userID;
        const {username, email} = req.body;

        const newUser = await User.findByIdAndUpdate(userID, {username,email},{new:true});

        if( !newUser){
            return res.status(200).json({
                userID,
                message:"user not found",
            });
        }

        return res.status(200).json({
            message:"profile edited successfully",
            success: true,
            user: newUser
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while edit user profile",
            success:false
        });
    }
}

const changePassword = async ( req, res) => {
    try{

        const userID = req.userID;
        const {oldPassword, newPassword} = req.body;

        const dbUser = await User.findById(userID);

        const compOldPassword = await bcrypt.compare(oldPassword, dbUser.password);

        if( !compOldPassword){
            return res.status(200).json({
                message:"old password doesnot match",
                success:false
            });
        }

        const newHashPassword = await bcrypt.hash(newPassword,10);

        const newUser = await User.findByIdAndUpdate(userID,{password:newHashPassword},{new:true});

        return res.status(200).json({
            message:"password successfully change",
            success: true,
            user: newUser
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while changing password",
            success:false
        });
    }
}

module.exports = {loginController,signupController,deleteAccount,editProfile,changePassword};