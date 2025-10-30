import mongoose from "mongoose";

// create a schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true } // createdAt and updatedAt fields
);

// then create a model based of that schema
const Note = mongoose.model("Note", noteSchema);

export default Note;
