import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import session from "express-session";
import Test from "./Test.js";
import UserRoutes from "./Users/userRoutes.js";
import AdminRoutes from "./Admins/adminRoutes.js";
import ProfileRoutes from "./Profiles/profileRoutes.js";
import PostRoutes from "./Posts/postRoutes.js";
import CommentRoutes from "./Comments/commentRoutes.js";
import { access } from "fs";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/storefrunt";

mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    accessControlAllowOrigin: process.env.FRONTEND_URL,
    accessControlAllowMethods: "GET, POST, PUT, DELETE",
    accessControlAllowHeaders: "Content-Type",
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));

app.use(express.json());

Test(app);
UserRoutes(app);
AdminRoutes(app);
ProfileRoutes(app);
PostRoutes(app);
CommentRoutes(app);

app.listen(process.env.PORT || 4000);
