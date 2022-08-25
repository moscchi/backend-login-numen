const jwt = require("jsonwebtoken");

const decodeFrontendToken = async (req, res) => {
    const authorization = req.headers.authorization;
    const token = authorization.split(/Bearer /);

    return jwt.decode(token[1])
}

const decodeToken = (token) => {
    return jwt.decode(token);
  }

module.exports = {decodeFrontendToken, decodeToken};