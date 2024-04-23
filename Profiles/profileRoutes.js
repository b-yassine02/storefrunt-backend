import * as profileClient from "./profileClient.js";

export default function ProfileRoutes(app) {
  const createProfile = async (req, res) => {
    const profile = await profileClient.createProfile(req.body);
    res.json(profile);
  };

  const deleteProfile = async (req, res) => {
    const { profileId } = req.params;
    const status = await profileClient.deleteProfile(profileId);
    res.json(status);
  };

  const findProfileById = async (req, res) => {
    const profile = await profileClient.findProfileById(req.params.profileId);
    res.json(profile);
  };

  const findAllProfiles = async (req, res) => {
    const profiles = await profileClient.findAllProfiles();
    res.json(profiles);
  };

  const findProfileByUserId = async (req, res) => {
    const profile = await profileClient.findProfileByUserId(req.params.userId);
    res.json(profile);
  };

  const updateProfile = async (req, res) => {
    const { profileId } = req.params;
    const status = await profileClient.updateProfile(profileId, req.body);
    res.json(status);
  };

  const profileFollowersCount = async (req, res) => {
    const profile = await profileClient.findProfileById(req.params.profileId);
    const followerCount = profile.followers.length;
    res.json({ followerCount: followerCount });
  };

  const profileFollowingCount = async (req, res) => {
    const profile = await profileClient.findProfileById(req.params.profileId);
    const followingCount = profile.following.length;
    res.json({ followingCount: followingCount });
  };

  app.post("/api/profiles", createProfile);
  app.get("/api/profiles", findAllProfiles);
  app.get("/api/profiles/:profileId", findProfileById);
  app.get("/api/profiles/user/:userId", findProfileByUserId);
  app.get("/api/profiles/follower/:profileId", profileFollowersCount);
  app.get("/api/profiles/following/:profileId", profileFollowingCount);
  app.put("/api/profiles/:profileId", updateProfile);
  app.delete("/api/profiles/:profileId", deleteProfile);
}
