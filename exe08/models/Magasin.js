// MODEL
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name : {
        type : String,
        required : 'Thanks to introduce a name !'
    },
    slug : {
        type : String,
        trim : true
    },
    img : {
        type : String
    },
    desc : {
        type : String,
        required : 'Thanks to set a description !'
    }
})

module.exports = mongoose.model('Magasin', schema)

