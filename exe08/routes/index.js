const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)

// HOME
router.get('/', pagesController.home)

// MAGASINS
router.get('/magasins/add', magasinsController.addMagasin)
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin
)

// MAGASIN DETAILS
router.get('/magasin/:slug', magasinsController.getMagasinBySlug)

// ABOUT
router.get('/about', pagesController.about)

module.exports = router 