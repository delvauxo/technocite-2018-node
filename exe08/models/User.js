// MODEL
const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const validator = require('validator')

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Wrong E-mail address !'],
        required: 'Please fill-in your E-mail !'
    },
    name: {
        type: String,
        trim: true,
        required: 'Please fill-in your Name !'
    },
    password: {
        type: String,
        trim: true,
        required: 'Please fill-in your password !'
    }
})

schema.plugin(passportLocalMongoose, {usernameField: 'email'})
module.exports = mongoose.model('User', schema)