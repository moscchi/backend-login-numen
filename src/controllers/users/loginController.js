const loginService = require('../../services/users/loginService');

const loginController = async (req, res) => {
    const user = await loginService(req);
    console.log(user);
    if(user) {
        res.json({message: 'usuario logueado con exito'})
    }
    res.status(401).json({message: 'usuario o contraseña invalidos'})
}

module.exports = loginController;