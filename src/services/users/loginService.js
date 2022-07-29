const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/usuarios.models");
require("dotenv").config();

const secret = process.env.PRIVATE_KEY;

const loginService = async (req, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const passwordOk =
    user === null ? false : await bcrypt.compare(password, user.password);
  const userForToken = {
    username: user.username,
  };
  const token = jwt.sign(userForToken, secret);
  if (passwordOk) {
    return { username: user.username, token };
  }
};

module.exports = loginService;
