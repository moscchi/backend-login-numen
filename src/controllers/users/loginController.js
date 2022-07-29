const loginService = require("../../services/users/loginService");

const loginController = async (req, res, next) => {
  try {
    const user = await loginService(req, next);
    if (user) {
      return res.json(user);
    }
    return res.status(401).json({ message: "usuario o contraseña invalidos" });  
  } catch (error) {
    next(error)
  }
  
};

module.exports = loginController;
