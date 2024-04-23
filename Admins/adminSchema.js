import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    user_id: { type: String, unique: true },
    privileges: {
      type: String,
      enum: ["moderator", "site_admin", "advertiser"],
      default: "moderator",
    },
  },
  { collection: "admins" }
);

export default adminSchema;
