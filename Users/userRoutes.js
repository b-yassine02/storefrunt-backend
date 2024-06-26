import * as userClient from "./userClient.js";

export default function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await userClient.createUser(req.body);
    res.json(user);
  };

  const deleteUser = async (req, res) => {
    const { userId } = req.params;
    const status = await userClient.deleteUser(userId);
    res.json(status);
  };

  const findAllUsers = async (req, res) => {
    const users = await userClient.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await userClient.findUserById(req.params.userId);
    res.json(user);
  };

  const findUserByUsername = async (req, res) => {
    const user = await userClient.findUserByUsername(req.params.username);
    res.json(user);
  };

  const findUserByEmailAddress = async (req, res) => {
    const user = await userClient.findUserByEmailAddress(
      req.params.emailAddress
    );
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const { userId } = req.params;
    const status = await userClient.updateUser(userId, req.body);
    const currentUser = await userClient.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };

  const signup = async (req, res) => {
    const user = await userClient.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
    }
    const currentUser = await userClient.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const currentUser = await userClient.findUserByCredentials(
      username,
      password
    );
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } else {
      res.sendStatus(401);
    }
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.get("/api/users/username/:username", findUserByUsername);
  app.get("/api/users/email/:emailAddress", findUserByEmailAddress);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
}
