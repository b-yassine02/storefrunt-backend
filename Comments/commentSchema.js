import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true, unique: true },
    post_id: { type: String, required: true, unique: true },
    comment: String,
  },
  { collection: "comments" }
);

export default commentSchema;
