const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.loginForm = (req, res, next) => {
    res.render('login')
}

// exports.registerForm = (req, res) => {
//     res.render('register')
// }

exports.checkRegister = (req, res, next) => {
    req.sanitizeBody('name')
    req.checkBody({
        name: {
            notEmpty: true,
            required: 'Please fill-in your name.'
        },
        email: {
            notEmpty: true,
            isEmail: true,
            required: 'Please fill-in your e-mail.'
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
}

exports.addUser = (req, res) => {
    res.render('register', {"user":{}})
}

exports.createUser = async (req, res) => {
    const user = await new User(req.body).save()
    res.redirect('../login')
}