const express = require('express')
const router = express.Router()
const pagesController = require(`${process.cwd()}/controllers/pagesController`)
const magasinsController = require(`${process.cwd()}/controllers/magasinsController`)
const userController = require(`${process.cwd()}/controllers/userController`)


// REGISTER
router.get('/register', userController.registerForm)
router.post('/register', userController.checkRegister, userController.register)

// LOGIN
router.get('/login', userController.loginForm)

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
// --delete
router.get('/magasins/:id/delete', magasinsController.deleteMagasin)

// MAGASIN DETAILS
router.get('/magasin/:slug', magasinsController.getMagasinBySlug)


// ABOUT
router.get('/about', pagesController.about)

module.exports = router 