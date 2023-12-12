const Contact = require("../models/contact");

const contactUs = async (req, res) => {

    try{
        const {email,message} = req.body;

        const form = await Contact.create({
            email,message
        });

        return res.status(200).json({
            message:"your message has been send successfully",
            success:true,
            data:form
        });
    }
    catch(err){
        return res.status(200).json({
            message:'Error while connecting to server',
            success: false
        });
    }
}

module.exports = {contactUs};