const mongoose = require("mongoose")

//casting things as strings for now

const CommentSchema = new mongoose.Schema({
    commentID: {
        type: mongoose.ObjectID,
        required: true,
    },
    authorID: {
        type: "string",
        required: true,
    },
    songID: {
        type: "string",
        required: true,
    },
    commentBody: String,
    timestamp: {
        type: mongoose.Decimal128,
        required: true,
    }

})

export const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;