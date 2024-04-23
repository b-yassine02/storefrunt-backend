import postModel from "./postModel.js";

export const createPost = (post) => {
  delete post._id;
  return postModel.create(post);
};

export const findAllPosts = () => postModel.find();

export const findPostById = (postId) => postModel.findById(postId);

export const findPostByUserId = (userId) => postModel.find({ user_id: userId });

export const updatePost = (postId, post) =>
  postModel.updateOne({ _id: postId }, { $set: post });

export const deletePost = (postId) => postModel.deleteOne({ _id: postId });
