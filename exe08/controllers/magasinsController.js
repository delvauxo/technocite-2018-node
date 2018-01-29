const mongoose = require('mongoose')
const Magasin = mongoose.model('Magasin')
const multer = require('multer')
const jimp = require('jimp')
const uuid = require('uuid')


exports.addMagasin = (req, res) => {
    // const magasins = await Magasin.find()
    // const magosh = new Magasin({ name: 'My Magosh', slug: 'my-magosh'});
    // magosh.save().then(() => console.log(magosh));
    // res.render('magasins',{title:'Ma home Page',test:'ceci est un test', magasins: magasins})
    res.render('magasin_edit', {"magasin":{}})
}

exports.createMagasin = async (req, res) => {
    const magosh = await new Magasin(req.body).save()
    res.redirect('/magasins')
}

exports.getMagasinBySlug = async (req, res, next) => {
    const magosh = await Magasin.findOne({slug : req.params.slug})
    res.render('magasin_details', {api_key: process.env.API_KEY, "magasin": magosh})
}

exports.editMagasin = async (req, res) => {
    const magosh = await Magasin.findOne({_id : req.params.id})
    if(!magosh) return next()
    res.render('magasin_edit', {"magasin": magosh})
}

exports.deleteMagasin = async (req, res) => {
    const magosh = await Magasin.findOneAndRemove({_id : req.params.id})
    res.redirect('/magasins')
}


const multerOptions = {
    storage : multer.memoryStorage(),
    fileFilter(req, file, next) {
        const isPhoto = file.mimetype.startsWith(`image/`)
        if(isPhoto) {
            next(null, true)
        } else {
            next({message: 'This filetype is not allowed'})
        }
    }
}

exports.upload = multer(multerOptions).single('img')
exports.resize = async(req, res, next) => {
    if(!req.file) {
        next()
        return
    } else {
        const extension = req.file.mimetype.split('/')[1]
        req.body.img = `${uuid.v4()}.${extension}`
        const photo = await jimp.read(req.file.buffer)
        await photo.resize(800,jimp.AUTO)
        await photo.write(`${process.cwd()}/public/uploads/${req.body.img}`)
        next()
    }
}

exports.updateMagasin = async (req, res) => {
    const magosh = await Magasin.findByIdAndUpdate({_id : req.params.id}, req.body, {new : true}).exec()
    res.redirect(`/magasin/${req.body.slug}`)
}



