const router = require('express').Router();
const registrationController = require('../controllers/users/registrationController')
const loginController = require('../controllers/users/loginController')
router.post('/registration', registrationController)
router.post('/login',loginController)
module.exports = router