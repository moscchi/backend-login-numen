const registrationService = require('../../services/users/registrationService')

const registrationController = async (req, res) => {
    await registrationService(req);
    res.json({message: 'Usuario creado con exito.'})
}

module.exports = registrationController;