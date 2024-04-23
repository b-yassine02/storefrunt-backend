import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true, unique: true },
    profile_pic: String,
    description: String,
    followers: [String],
    following: [String],
  },
  { collection: "profiles" }
);

export default profileSchema;
