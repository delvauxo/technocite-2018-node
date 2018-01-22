const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')

exports.home = async (req, res) => {
    const magasins = await Magasin.find()
    // const magosh = new Magasin({ name: 'My last add', slug: 'my-last-add'})
    // magosh.save().then(() => console.log(magosh))
    res.render('home',{title:'Ma home Page',test:'ceci est un test', magasins: magasins})
}

exports.about = (req,res)=>{
    res.render('about',{title:'Ma About Page',test:'ceci est un test', layout: 'layouts/colors'})
}