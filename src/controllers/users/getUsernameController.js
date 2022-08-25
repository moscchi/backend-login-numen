const getUsername = require("../../services/users/userService");

const getUsernameController = async (req, res, next) => {
  try {
    const username = await getUsername(req, res);
    if (username) {
      return res.json({username, token: true});
    }
    return res.status(401).json({ message: "Token inválido." });  
  } catch (error) {
    next(error)
  }
  
};

module.exports = getUsernameController;
