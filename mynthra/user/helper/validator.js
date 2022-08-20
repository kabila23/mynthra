const { check, validationResult } = require('express-validator');

exports.userValidationResult = (req, res, next) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
        const error = result.array()[0].msg;
        return res.json({ status: false, message: error })
    }
    next();
};
//indirakumar
exports.uservalidator = [
    check('username')
        .trim().not().isEmpty().withMessage('UserName is required').isAlphanumeric().withMessage('Name must contain alphabets and numbers').not().isNumeric().withMessage('Name must contain only alpha numeric characters').isLength({min:3,max:20}).withMessage('Name must be more than 3 characters to 20 characters!'),
    check('phone')
        .trim().not().isEmpty().withMessage('contact Number is required').not().isAlpha().withMessage('Contact number must contain only numbers').not().isAlphanumeric().withMessage('Contact number must contain only numbers'),
    check('email')
        .trim().not().isEmpty().withMessage('Email is required').not().isNumeric().withMessage('Not only Number please enter valid email').isEmail().withMessage('Please provide a valid Email!'),
    check('password')
        .trim().not().isEmpty().withMessage('password is required').isLength({min:7}).withMessage('password must be atleast 7 characters long!').isStrongPassword().withMessage('password must contain minimum 1 uppercase minimum 1 lowercase and minimum 1 special character and one numeric value'),
    check('confirmpassword')
        .trim().not().isEmpty().withMessage('confirm password is required'),
]
exports.signinValidator = [
    check('email')
        .trim().not().isEmpty().withMessage('Email is required').not().isNumeric().withMessage('Not only Number please enter valid email').isEmail().withMessage('Please provide a valid Email!'),
    check('password')
        .trim().not().isEmpty().withMessage('password is required')
]