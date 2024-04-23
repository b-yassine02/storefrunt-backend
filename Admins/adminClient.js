import adminModel from "./adminModel.js";

export const createAdmin = (admin) => {
  delete admin._id;
  return adminModel.create(admin);
};

export const findAdminById = (adminId) => adminModel.findById(adminId);

export const findAllAdmins = () => adminModel.find();

export const findAdminByUserId = (userId) =>
  adminModel.findOne({ user_id: userId });

export const updateAdmin = (adminId, admin) =>
  adminModel.updateOne({ _id: adminId }, { $set: admin });

export const deleteAdmin = (adminId) => adminModel.deleteOne({ _id: adminId });
