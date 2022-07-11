const bcrypt = require('bcrypt')
const User = require('../../models/usuarios.models');

const loginService = async (req) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
    
        const passwordOk = user === null ? false : await bcrypt.compare(password, user.password);
        if(passwordOk) {
            return user;
        }
    } catch (error) {
        next(error)
    }
}

module.exports = loginService