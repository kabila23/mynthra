const express = require('express');
const router = express.Router();
const cont = require('../controller/admin')

router.post('/adminregister',valid.adminvalidator,valid.userValidationResult,cont.adminregister);
router.post('/adminlogin',valid.loginadminValidator,valid.userValidationResult,cont.adminlogin);

module.exports = router