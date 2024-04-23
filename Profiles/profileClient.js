import profileModel from "./profileModel.js";

export const createProfile = (profile) => {
  delete profile._id;
  return profileModel.create(profile);
};

export const findAllProfiles = () => profileModel.find();

export const findProfileById = (profileId) => profileModel.findById(profileId);

export const findProfileByUserId = (userId) =>
  profileModel.findOne({ user_id: userId });

export const updateProfile = (profileId, profile) =>
  profileModel.updateOne({ _id: profileId }, { $set: profile });

export const deleteProfile = (profileId) =>
  profileModel.deleteOne({ _id: profileId });
