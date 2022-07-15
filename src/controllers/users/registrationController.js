const registrationService = require('../../services/users/registrationService')

const registrationController = async (req, res, next) => {
    await registrationService(req, res, next);
    res.json({message: 'Usuario creado con exito.'})
}

module.exports = registrationController;