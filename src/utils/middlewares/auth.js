const jwt = require('jsonwebtoken')
require('dotenv').config();

const auth = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if(!authorization){
            return res.status(401).json({error: 'Falta el token o es inválido.'})
        }
    
        let token = null;

    if(authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }

    const decodedToken = jwt.verify(token, process.env.PRIVATE_KEY)
    if(!token || !decodedToken.username) return res.status(401).json({error: 'Falta el token o es inválido.'})
        next();
    } catch (error) {
        next(error)
    }

}

module.exports = auth