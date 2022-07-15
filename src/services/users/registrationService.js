const bcrypt = require('bcrypt')
const User = require('../../models/usuarios.models');

const registrationService = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const userExists = await User.findOne({username})
        if(userExists)  res.status(404).send({message: "Nombre de usuario no disponible."});
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, password: hashPassword });
        await user.save();
    } catch (error) {
        next(error);
    }
}

module.exports = registrationService;