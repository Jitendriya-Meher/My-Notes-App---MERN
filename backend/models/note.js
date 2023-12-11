const { Schema, default: mongoose, model } = require("mongoose");

const noteSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true 
    },
    userID:{
        type:String,
        require:true,
    },
    createdAt:{
        type:String,
        require:true
    }
});

const Note = new model("Note",noteSchema);
module.exports = Note;