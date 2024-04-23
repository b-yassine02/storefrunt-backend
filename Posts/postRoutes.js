import * as postClient from "./postClient.js";

export default function PostRoutes(app) {
  const createPost = async (req, res) => {
    const post = await postClient.createPost(req.body);
    res.json(post);
  };

  const deletePost = async (req, res) => {
    const { postId } = req.params;
    const status = await postClient.deletePost(postId);
    res.json(status);
  };

  const findPostById = async (req, res) => {
    const post = await postClient.findPostById(req.params.postId);
    res.json(post);
  };

  const findAllPosts = async (req, res) => {
    const posts = await postClient.findAllPosts();
    res.json(posts);
  };

  const findPostByUserId = async (req, res) => {
    const post = await postClient.findPostByUserId(req.params.userId);
    res.json(post);
  };

  const updatePost = async (req, res) => {
    const { postId } = req.params;
    const status = await postClient.updatePost(postId, req.body);
    res.json(status);
  };

  const postLikeCount = async (req, res) => {
    const post = await postClient.findPostById(req.params.postId);
    const likeCount = post.post_likes.length;
    res.json({ likeCount: likeCount });
  };

  app.post("/api/posts", createPost);
  app.get("/api/posts", findAllPosts);
  app.get("/api/posts/:postId", findPostById);
  app.get("/api/posts/user/:userId", findPostByUserId);
  app.get("/api/posts/likes/:postId", postLikeCount);
  app.put("/api/posts/:postId", updatePost);
  app.delete("/api/posts/:postId", deletePost);
}
