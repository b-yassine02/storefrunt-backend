import mongoose from "mongoose";
import adminSchema from "./adminSchema.js";

const adminModel = mongoose.model("AdminModel", adminSchema);

export default adminModel;
