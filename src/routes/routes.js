const router = require('express').Router();
const auth = require('../utils/middlewares/auth');
const protectedMaterialController = require('../controllers/protectedMaterial/protectedMaterial')
const registrationController = require('../controllers/users/registrationController')
const loginController = require('../controllers/users/loginController');
const getUsernameController = require('../controllers/users/getUsernameController');

router.post('/registration', registrationController)
router.post('/login',loginController)
router.get('/material', auth, protectedMaterialController)
router.get('/auth/username', auth, getUsernameController)

module.exports = router