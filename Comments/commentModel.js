import mongoose from "mongoose";
import commentSchema from "./commentSchema.js";

const commentModel = mongoose.model("CommentModel", commentSchema);

export default commentModel;
