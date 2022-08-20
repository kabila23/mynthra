const express = require('express');
const router = express.Router();
const cont = require('../controller/user')
const valid = require('../helper/validator')

router.post('/signup', valid.uservalidator, valid.userValidationResult, cont.signupuser);
router.post('/signin', valid.signinValidator, valid.userValidationResult, cont.signinuser);

module.exports = router