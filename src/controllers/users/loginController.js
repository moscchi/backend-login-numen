const loginService = require('../../services/users/loginService');

const loginController = async (req, res, next) => {
    const user = await loginService(req, next);
    console.log(user);
    if(user) {
        res.json(user)
    }
    res.status(401).json({message: 'usuario o contraseña invalidos'})
}

module.exports = loginController;