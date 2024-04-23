import commentModel from "./commentModel.js";

export const createComment = (comment) => {
  delete comment._id;
  return commentModel.create(comment);
};

export const findCommentById = (commentId) => commentModel.findById(commentId);

export const findAllComments = () => commentModel.find();

export const findCommentsByUserId = (userId) =>
  commentModel.find({ user_id: userId });

export const findCommentsByPostId = (postId) =>
  commentModel.find({ post_id: postId });

export const updateComment = (commentId, comment) =>
  commentModel.updateOne({ _id: commentId }, { $set: comment });

export const deleteComment = (commentId) =>
  commentModel.deleteOne({ _id: commentId });
