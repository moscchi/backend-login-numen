const bcrypt = require('bcrypt')
const User = require('../../models/usuarios.models');

const registrationService = async (req) => {
    try {
        const { username, password } = req.body;
        const hashPassword = await bcrypt.hash(password, 10)
        const user = new User({ username, password: hashPassword });
        await user.save();
    } catch (error) {
        console.log(error);
    }
}

module.exports = registrationService;