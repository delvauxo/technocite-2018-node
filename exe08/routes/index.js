const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)

// HOME
router.get('/', pagesController.home)

// MAGASINS
// --add
router.get('/magasins/add', magasinsController.addMagasin)
router.post('/magasins/add', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.createMagasin
)
// --edit
router.get('/magasins/:id/edit', magasinsController.editMagasin)
router.post('/magasins/add/:id', 
    magasinsController.upload,
    magasinsController.resize,
    magasinsController.updateMagasin
)
// router.post('/magasins/:id/edit', magasinsController.editMagasin)

// MAGASIN DETAILS
router.get('/magasin/:slug', magasinsController.getMagasinBySlug)

// ABOUT
router.get('/about', pagesController.about)

module.exports = router 