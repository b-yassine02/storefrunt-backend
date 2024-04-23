import mongoose from "mongoose";
import profileSchema from "./profileSchema.js";

const profileModel = mongoose.model("ProfileModel", profileSchema);

export default profileModel;
