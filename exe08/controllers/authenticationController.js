const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('passport')
const flash = require('connect-flash')

exports.login = passport.authenticate('local', {
    failureRedirect : '/login',
    successRedirect : '/',
    successFlash: true,
    failureFlash: true
})  

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        // console.log(req.body)
        next()
        return
    }
    res.redirect('/login')
}

exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}