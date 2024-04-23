import * as commentClient from "./commentClient.js";

export default function CommentRoutes(app) {
  const createComment = async (req, res) => {
    const comment = await commentClient.createComment(req.body);
    res.json(comment);
  };

  const deleteComment = async (req, res) => {
    const { commentId } = req.params;
    const status = await commentClient.deleteComment(commentId);
    res.json(status);
  };

  const findCommentById = async (req, res) => {
    const comment = await commentClient.findCommentById(req.params.commentId);
    res.json(comment);
  };

  const findAllComments = async (req, res) => {
    const comments = await commentClient.findAllComments();
    res.json(comments);
  };

  const findCommentsByUserId = async (req, res) => {
    const comment = await commentClient.findCommentsByUserId(req.params.userId);
    res.json(comment);
  };

  const findCommentsByPostId = async (req, res) => {
    const comment = await commentClient.findCommentsByPostId(req.params.postId);
    res.json(comment);
  };

  const updateComment = async (req, res) => {
    const { commentId } = req.params;
    const status = await commentClient.updateComment(commentId, req.body);
    res.json(status);
  };

  app.post("/api/comments", createComment);
  app.get("/api/comments", findAllComments);
  app.get("/api/comments/:commentId", findCommentById);
  app.get("/api/comments/user/:userId", findCommentsByUserId);
  app.get("/api/comments/post/:postId", findCommentsByPostId);
  app.put("/api/comments/:commentId", updateComment);
  app.delete("/api/comments/:commentId", deleteComment);
}
