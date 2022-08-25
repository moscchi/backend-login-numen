const {decodeFrontendToken} = require('./authService')

const getUsername = async (req, res, next) => {
    const {username} = await decodeFrontendToken(req)
    console.log(username);
    res.json({username})
}

module.exports = getUsername;