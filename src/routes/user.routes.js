import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.send("User Home Page");
});

userRoutes.get("/profile", (req, res) => {
  res.send("User Profile Page");
});

export default userRoutes;



