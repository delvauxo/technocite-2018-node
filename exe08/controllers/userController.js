const mongoose = require ('mongoose')
const User = mongoose.model('User')
const promisify = require('es6-promisify')

exports.loginForm = (req, res, next) => {
    res.render('login')
}

exports.registerForm = (req, res) => {
    res.render('register')
}

exports.checkRegister = (req, res, next) => {
    req.sanitizeBody('name')
    req.checkBody({
        name: {
            notEmpty: true,
            errorMessage: 'Please fill-in your name.'
        },
        email: {
            notEmpty: true,
            isEmail: true,
            errorMessage: 'Please fill-in your e-mail.'
        },
        password: {
            notEmpty: true,
            errorMessage: 'Password is empty.'
        },
        'password-confirm': {
            notEmpty: true,
            errorMessage: 'Password confirmation is empty.'
        }
    })
    req.checkBody('password-confirm', 'Your password is not equal with your password confirmation').equals(req.body.password)
    console.log(req.body)

    const errors = req.validationErrors()

    if(errors) {
        res.render('register', {'user': req.body, 'errors': errors})
    } else {
        next()
    }

}

exports.register = async (req, res, next) => {
    const user = await new User({email : req.body.email, name : req.body.name})
    const register = promisify(User.register, User)
    try {
        await register(user, req.body.password)
    } catch (e) {
        console.log(e)
    }
    next()
}

exports.registerAfter = (req, res) => {
    res.redirect('/')
}
