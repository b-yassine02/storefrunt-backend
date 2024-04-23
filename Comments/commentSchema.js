import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    post_id: { type: String, required: true },
    comment: String,
  },
  { collection: "comments" }
);

export default commentSchema;
