const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../Controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../Middlewares/auth");

const Router = express.Router();

Router.route("/register").post(registerUser);

Router.route("/login").post(loginUser);

module.exports = Router;
