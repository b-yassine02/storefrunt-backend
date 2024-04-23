import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true, unique: true },
    post_title: String,
    post_description: String,
    post_image: String,
    post_link: String,
    post_price: Number,
    post_likes: [String],
    post_created: { type: Date, default: Date.now },
  },
  { collection: "posts" }
);

export default postSchema;
