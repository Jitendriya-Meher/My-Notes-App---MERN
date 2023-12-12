const Note = require("../models/note");

const addNote = async ( req, res) => {
    try{

        const {title,description} = req.body;
        const id = req.userID;

        const dbNote = await Note.create({
            title,
            description,
            userID:id,
            createdAt:new Date().toDateString()
        });

        return res.status(200).json({
            message:"note added successfully",
            success: true,
            note:dbNote
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while adding notes",
            success:false
        });
    }
}

const getAllNotes = async (req, res) => {
    try{
        const id = req.userID;

        const notes = await Note.find({
            userID:id 
        });

        return res.status(200).json({
            message:"note fetched successfully",
            success: true,
            note:notes
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while fetching user notes",
            success:false
        });
    }
}

const getSingleNote = async (req, res) => {
    try{
        const noteID = req.params.id;

        const note = await Note.findOne({_id:noteID});

        if( !note){
            return res.status(200).json({
                message:"note not found",
                success:false
            });
        }

        return res.status(200).json({
            message:"note fetched successfully",
            success: true,
            note:note
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while fetching note",
            success:false
        });
    }
}

const editNote = async (req, res) => {

    try{

        const noteID = req.params.id;
        const {title, description} = req.body;

        const note = await Note.findByIdAndUpdate(noteID,{title, description},{new:true});

        if( !note){
            return res.status(200).json({
                message:"note not found",
                success:false
            });
        }

        return res.status(200).json({
            message:"note edited successfully",
            success: true,
            note:note
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while editing note",
            success:false
        });
    }
}

const deleteNote = async (req, res) => {
    try{
        const noteID = req.params.id;

        const delNote = await Note.findByIdAndDelete(noteID);

        if( !delNote){
            return res.status(200).json({
                message:"note not found",
                success:false
            });
        }

        return res.status(200).json({
            message:"note deleted successfully",
            success: true,
            note:delNote
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while deleting note",
            success:false
        });
    }
}

const deleteAllNote = async (req,res) => {

    try{
        const userID = req.userID;

        const delNotes = await Note.deleteMany({userID});

        return res.status(200).json({
            message:"all notes deleted successfully",
            success: true,
            note:delNotes
        });
    }
    catch(err){
        return res.status(200).json({
            message:"server Error while deleting all note",
            success:false
        });
    }
}

module.exports = {addNote,getAllNotes,getSingleNote,editNote,deleteNote,deleteAllNote};