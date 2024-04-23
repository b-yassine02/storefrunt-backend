import mongoose from "mongoose";
import postSchema from "./postSchema.js";

const postModel = mongoose.model("PostSchema", postSchema);

export default postModel;
