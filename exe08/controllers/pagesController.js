const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')

const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')

exports.home = async (req, res) => {
    const magosh = await Magasin.find()
    // const magosh = new Magasin({ name: 'My last add', slug: 'my-last-add'})
    // magosh.save().then(() => console.log(magosh))
    res.render('home',{title:'Ma home Page',test:'ceci est un testtttt', magasins: magosh})
}

exports.about = (req,res)=>{
    res.render('about',{title:'Ma About Page',test:'ceci est un testz', layout: 'layouts/colors'})
}
